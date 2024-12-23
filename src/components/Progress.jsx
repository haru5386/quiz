import { useState, useEffect } from "react";

export default function Progress({ onTimerOut, time, userCurrentAnswer }) {

  const [remainTime, setRemainTime] = useState(time);

  useEffect(() => {
    const timeout = setTimeout(onTimerOut, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [onTimerOut, time]);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setRemainTime((prev) => prev - 100);
    }, 100);
    return () => clearInterval(intervalTime);
  }, []);

  let className = ''
  if(userCurrentAnswer) className += 'answered'

  return (
    <>
      <progress value={remainTime} max={time} className={className}></progress>
    </>
  );
}
