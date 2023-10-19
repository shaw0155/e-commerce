import { useState, useEffect } from "react";
export default function CountDown() {
  const [countdown, setCountdown] = useState({
    hours: 24,
    minutes: 16,
    seconds: 0,
  });

  const { hours, minutes, seconds } = countdown;
  useEffect(() => {
    const timer = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        // You can perform an action when the timer reaches 0.
      } else if (minutes === 0 && seconds === 0) {
        setCountdown({
          hours: hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (seconds === 0) {
        setCountdown({
          hours,
          minutes: minutes - 1,
          seconds: 59,
        });
      } else {
        setCountdown({
          hours,
          minutes,
          seconds: seconds - 1,
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [hours, minutes, seconds]);

  return (
    <div className="countdown">
      <h4>{hours.toString().padStart(2, "0")}</h4> :
      <h4> {minutes.toString().padStart(2, "0")}</h4> :
      <h4>{seconds.toString().padStart(2, "0")}</h4>
    </div>
  );
}
