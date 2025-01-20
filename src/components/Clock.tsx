// React 
import { useState, useEffect } from "react";

// CSS
import "../assets/css/clock_date.css";

function Clock() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDateState(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const timeString = dateState.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [time, period] = timeString.split(" ");

  return (
    <div className="App">
      <p className="clock">
        {time} <span className="period">{period}</span>
      </p>
    </div>
  );
}

export default Clock;