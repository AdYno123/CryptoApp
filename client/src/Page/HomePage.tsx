import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useHttpContext, {
  HttpRequestType,
} from "../constans/hooks/useHttpContext";
import { CryptoInfo } from "../constans/stored-interface";
import { useStartFunctionAfterTime } from "../hooks/useStartFunctionAfterTime";

const HomePage = () => {
  const [data, setData] = useState<CryptoInfo[]>([]);
  const httpProvider = useHttpContext();
  const TimeForUpdateData: number = 5;

  const loadData = () => {
    httpProvider
      .sendRequest<CryptoInfo[]>("api/v3/ticker/24hr", HttpRequestType.Get)
      .then((responseData) => {
        if (responseData.success === true && responseData.data) {
          let filteredData = responseData.data
            .filter((row) => +row.lastPrice !== 0)
            .slice(0, 20);
          setData(filteredData);
        } else {
          toast.error("Crypto data was not loaded");
        }
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  useStartFunctionAfterTime(loadData, TimeForUpdateData);

  return (
    <div className="container mx-auto px-3">
      <section className=" mb-3 bg-cyan-600 rounded-lg p-3  py-4 ">
        <div className="flex justify-end text-xl font-bold ">
          <p className="">Price</p>
        </div>
      </section>
      {data.map((row, index) => (
        <section key={index} className="border-b-2  border-gray-600 py-1 ">
          <div className="flex justify-between text-xl font-bold ">
            <p className="">{row.symbol}</p>
            <p className="">{row.lastPrice}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-300">Vol: {row.volume}</p>
            <p
              className={
                +row.priceChangePercent > 0 ? `text-green-500` : `text-red-500`
              }
            >
              {row.priceChangePercent}%
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomePage;
