import React, { useEffect, useState } from "react";

export const useStartFunctionAfterTime = (
  execFunction: () => void,
  time: number
) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const counter = count + 1;
      setCount(counter);
      if (counter === time) {
        execFunction();
        setCount(0);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);
};
