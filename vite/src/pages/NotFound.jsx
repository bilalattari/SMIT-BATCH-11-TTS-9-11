import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function NotFound({ title }) {
  const navigate = useNavigate();
  const [sec, setSeconds] = useState(10);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      console.log("++++Interval Chal raha ");

      if (sec <= 0) {
        navigate("/");
      } else {
        setSeconds(sec - 1);
      }
    }, 1000);
    return () => {
      console.log("---Interval cleared");
      clearInterval(interval);
    };
  }, [sec]);

  return (
    <div className="m-24">
      <h1 className="text-5xl text-center font-bold">
        {" "}
        {title ? title : "Not Found"}
      </h1>

      <h1 className="text-2xl my-4 text-center">
        You will be Navigated Back to Home Page in {sec} seconds.
      </h1>
    </div>
  );
}

export default NotFound;
