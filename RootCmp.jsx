const { useState, useEffect } = React;

import { AnimalList } from "./cmps/animalList.jsx";
import { CountDown } from "./cmps/countDown.jsx";
import { Home } from "./cmps/Home.jsx";
import { MouseMonitor } from "./cmps/MouseMonitor.jsx";
import { SeasonClock } from "./cmps/SeasonClock.jsx";
import { WatcherApp } from "./cmps/WatcherApp.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";

export function RootCmp() {
  const [page, setPage] = useState("Home");
  const animalInfos = [
    { type: "Dog", count: 2 },
    { type: "Cat", count: 3 },
    { type: "Parrot", count: 1 },
  ];

  const renderComponent = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "AnimalList":
        return <AnimalList animalInfos={animalInfos} />;
      case "SeasonClock":
        return <SeasonClock />;
      case "CountDown":
        return (
          <CountDown
            key={1}
            startFrom={10}
            onDone={() => alert("Time's up!")}
          />
        );
      case "countDownToTime":
        return (
          <CountDown
            key={2}
            startFrom={null}
            toTime={Date.now() + 1000 * 1000}
            onDone={() => {
              console.log("Its Time!");
            }}
          />
        );
      case "MouseMonitor":
        return <MouseMonitor />;
      case "WatcherApp":
        return <WatcherApp />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header>
        <AppHeader setPage={setPage} />
      </header>
      <main>{renderComponent()}</main>
      <footer>{"CA  =>  React-Basics"} </footer>
    </div>
  );
}
