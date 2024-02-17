export function AppHeader({ setPage }) {
  const handleNavClick = (pageName) => {
    setPage(pageName);
  };
  return (
    <header className="app-header">
      <section className="header-container">
        <nav>
          <button className="nav-button" onClick={() => handleNavClick("Home")}>
            Home
          </button>
          <button
            className="nav-button"
            onClick={() => handleNavClick("AnimalList")}
          >
            Animal List
          </button>
          <button
            className="nav-button"
            onClick={() => handleNavClick("SeasonClock")}
          >
            Season Clock
          </button>
          <button
            className="nav-button"
            onClick={() => handleNavClick("CountDown")}
          >
            Count Down
          </button>
          <button
            className="nav-button"
            onClick={() => handleNavClick("countDownToTime")}
          >
            Count Down 2
          </button>
          <button
            className="nav-button"
            onClick={() => handleNavClick("MouseMonitor")}
          >
            Mouse Monitor
          </button>
          <button
            className="nav-button"
            onClick={() => handleNavClick("WatcherApp")}
          >
            Watcher App
          </button>
        </nav>
      </section>
    </header>
  );
}
