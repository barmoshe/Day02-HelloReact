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
      <h1>
        Welcome to the <span>React-Basics</span>
      </h1>
    </main>
  );
}
