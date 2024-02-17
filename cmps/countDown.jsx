const { useState, useEffect, useRef } = React;
import { utilService } from "../services/util.service.js";

export function CountDown({ startFrom, onDone, toTime }) {
  const calcStartFrom = toTime
    ? Math.max(Math.floor((toTime - Date.now()) / 1000), 0)
    : startFrom;

  const [isRunning, setIsRunning] = useState(toTime ? true : false);
  const timeLeftRef = useRef(calcStartFrom); // Using useRef to store timeLeft
  const clickedStart = useRef(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeftRef.current > 0) {
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

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, onDone]);

  const [timeLeft, setTimeLeft] = useState(calcStartFrom); // Moved timeLeft state inside the component

  useEffect(() => {
    // Update timeLeftRef when calcStartFrom changes
    timeLeftRef.current = calcStartFrom;
    setTimeLeft(calcStartFrom);
  }, [calcStartFrom]);

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
          <button onClick={() => setTimeLeft(calcStartFrom)}>
            {timeLeft === 0 ? "Restart" : "Reset"}
          </button>
        </React.Fragment>
      )}
    </section>
  );
}
