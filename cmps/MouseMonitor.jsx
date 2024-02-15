const { useState, useEffect } = React;

export function MouseMonitor() {
  const [isOn, setIsOn] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const addMouseListener = () => {
      document.addEventListener("mousemove", updatePos);
    };

    const removeMouseListener = () => {
      document.removeEventListener("mousemove", updatePos);
    };

    if (isOn) {
      addMouseListener();
    } else {
      removeMouseListener();
    }

    // Cleanup function
    return () => {
      removeMouseListener();
    };
  }, [isOn]);

  const handlePauseResume = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <section className={`mouse-monitor ${isOn ? "on" : "off"}`}>
      {isOn && (
        <React.Fragment>
          <p>Mouse Position:</p>
          <p>X: {pos.x}</p>
          <p>Y: {pos.y}</p>
        </React.Fragment>
      )}
      <button onClick={handlePauseResume}>{isOn ? "Pause" : "Resume"}</button>
    </section>
  );
}
