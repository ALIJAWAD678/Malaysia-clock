import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
  const [time, settime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p>
      This is the current Time{time.toLocaleDateString()}{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
