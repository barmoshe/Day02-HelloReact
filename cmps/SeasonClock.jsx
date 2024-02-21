import { utilService } from "../services/util.service.js";
const { useState, useEffect } = React;

export function SeasonClock() {
  const [isDark, setIsDark] = useState(false);
  const [date, setDate] = useState(new Date());

  // Function to toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  // Effect to update date every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Function to get current season based on the month
  const getCurrentSeason = () => {
    const month = date.getMonth() + 1; // Month is 0-indexed
    if (month >= 3 && month <= 5) {
      return "spring";
    } else if (month >= 6 && month <= 8) {
      return "summer";
    } else if (month >= 9 && month <= 11) {
      return "autumn";
    } else {
      return "winter";
    }
  };

  return (
    <section
      onClick={toggleDarkMode}
      className={`season-clock ${isDark ? "dark" : ""}`}
    >
      <h3>
        {utilService.getMonthName(date)} ({utilService.getCurrentSeason(date)}){" "}
      </h3>

      <img
        src={`../assets/img/${getCurrentSeason()}.png`}
        alt={getCurrentSeason(date)}
      />
      <h3>{utilService.getDayName(date)}</h3>
    </section>
  );
}
