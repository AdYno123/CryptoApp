import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useHttpContext, {
  HttpRequestType,
} from "../constans/hooks/useHttpContext";
import { CryptoInfo } from "../constans/stored-interface";

const HomePage = () => {
  const [data, setData] = useState<CryptoInfo[]>([]);
  const httpProvider = useHttpContext();

  useEffect(() => {
    httpProvider
      .sendRequest<CryptoInfo[]>("api/v3/ticker/24hr", HttpRequestType.Get)
      .then((responseData) => {
        if (responseData.success == true && responseData.data) {
          setData(responseData.data);
        } else {
          toast.error("Crypto data was not loaded");
        }
      });
  }, []);

  return (
    <div>
      {data.slice(0, 10).map((row, index) => (
        <p key={index}>{row.symbol}</p>
      ))}
    </div>
  );
};

export default HomePage;
