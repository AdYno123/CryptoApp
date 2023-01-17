import axios from "axios";
import { ServiceResponse } from "../stored-interface";

export enum HttpRequestType {
  Get = 1,
  Post = 2,
  Delete = 3,
}

const urlBackend = "https://api2.binance.com/";

const useHttpContext = () => {
  const sendRequest = async <T extends unknown>(
    url: string,
    requestType: HttpRequestType,
    data?: any
  ) => {
    try {
      const controller = new AbortController();
      const api = axios.create({
        baseURL: urlBackend,
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        signal: controller.signal,
      });
      let result;
      if (requestType.valueOf() === HttpRequestType.Get) {
        result = await api.get<T>(url);
      } else if (requestType.valueOf() === HttpRequestType.Post) {
        result = await api.post<T>(url, data);
      } else {
        result = await api.delete<T>(url);
      }
      let returnFailed: ServiceResponse<T> = {
        message: `Data has been loaded`,
        success: true,
        data: result.data,
      };
      controller.abort();
      return returnFailed;
    } catch (error) {
      let e = error as Error;
      let returnFailed: ServiceResponse<T> = {
        message: `Error send request - ${e.message}`,
        success: false,
        data: null,
      };
      return returnFailed;
    }
  };

  return {
    sendRequest: sendRequest,
  };
};

export default useHttpContext;
