import { AnimalList } from "./animalList.jsx";
import { SeasonClock } from "./SeasonClock.jsx";
import { CountDown } from "./countDown.jsx";
import { MouseMonitor } from "./MouseMonitor.jsx";
const { useState, useEffect } = React;

export function Home() {
  return (
    <main className="home">
      <MouseMonitor />

      <AnimalList
        animalInfos={[
          { type: "Dog", count: 2 },
          { type: "Cat", count: 3 },
          { type: "Parrot", count: 1 },
        ]}
      />
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
