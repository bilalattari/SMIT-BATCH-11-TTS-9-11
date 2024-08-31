import React, { useEffect, useRef, useState } from "react";

const Card = ({ data, removeCard }) => {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer <= 0) {
        removeCard(data.createdAt);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div
      key={data.createdAt}
      className={`h-72 w-72 flex-col flex justify-center items-center rounded-md`}
      style={{
        backgroundColor: data.bg,
        color: data.txtColor,
      }}
    >
      <h1 className="text-5xl">{data.txt}</h1>
      <h1 className="text-2xl">{timer} s</h1>
    </div>
  );
};

export default Card;
