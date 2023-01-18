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
        if (responseData.success === true && responseData.data) {
          setData(responseData.data);
        } else {
          toast.error("Crypto data was not loaded");
        }
      });
  }, []);

  return (
    <div className="container mx-auto">
      {data.slice(0, 20).map((row, index) => (
        <section key={index}>
          <div className="flex justify-between text-xl font-bold ">
            <p className="">{row.symbol}</p>
            <p className="">{row.lastPrice}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="">{row.count}</p>
            <p className="">{row.priceChangePercent.substring(0, 5)}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomePage;
