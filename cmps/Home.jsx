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
    <section className="home">
      <h1>
        Welcome to the <span>React-Basics</span> App!
      </h1>
      <p>
        This app is a collection of simple components that demonstrate basic
        React concepts. with the style of netflix
      </p>
      <img src="../assets/img/Netflix.gif" alt="netflix" />
    </section>
  );
}
