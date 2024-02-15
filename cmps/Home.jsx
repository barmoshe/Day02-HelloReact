import { AnimalList } from "./animalList.jsx";
import { SeasonClock } from "./SeasonClock.jsx";
import { CountDown } from "./countDown.jsx";
import { MouseMonitor } from "./MouseMonitor.jsx";
import { WatcherApp } from "./WatcherApp.jsx";
const { useState, useEffect } = React;

export function Home() {
  const animalInfos = [
    { type: "Dog", count: 2 },
    { type: "Cat", count: 3 },
    { type: "Parrot", count: 1 },
  ];
  return (
    <main className="home">
      <MouseMonitor />
      <WatcherApp />

      <AnimalList animalInfos={animalInfos} />
      <SeasonClock />
      <CountDown startFrom={10} onDone={() => alert("Time's up!")} />
      <CountDown
        toTime={Date.now() + 1000 * 10000}
        onDone={() => {
          console.log("Its Time!");
        }}
      />
    </main>
  );
}
