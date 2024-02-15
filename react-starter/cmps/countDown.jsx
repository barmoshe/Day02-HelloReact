const { useState, useEffect } = React;
import { utilService } from "../services/util.service.js";

export function CountDown({ startFrom, onDone, toTime }) {
  if (toTime) {
    startFrom = Math.max(Math.floor((toTime - Date.now()) / 1000), 0);
  }
  const [timeLeft, setTimeLeft] = useState(startFrom);
  const [isRunning, setIsRunning] = useState(!!toTime);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            if (onDone) onDone();
            setIsRunning(false);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, onDone, timeLeft]);

  return (
    <section className={`count-down ${timeLeft < 6 ? "warning" : ""}`}>
      <h2>
        Count Down{" "}
        {toTime ? `To ${utilService.getTime(toTime)} ` : "START FROM"}
      </h2>
      <h3>{timeLeft}</h3>
      {toTime ? null : (
        <React.Fragment>
          {!isRunning && timeLeft !== 0 && (
            <button onClick={() => setIsRunning(true)}>Start</button>
          )}
          {isRunning && (
            <button onClick={() => setIsRunning(false)}>Pause</button>
          )}
          <button onClick={() => setTimeLeft(startFrom)}>
            {timeLeft === 0 ? "Restart" : "Stop"}
          </button>
        </React.Fragment>
      )}
    </section>
  );
}
