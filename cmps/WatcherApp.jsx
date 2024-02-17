import { utilService } from "../services/util.service.js";
import { watcherService } from "../services/watcher.service.js";
const { useState, useEffect } = React;
export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);

  useEffect(() => {
    fetchWatchers();
  }, []); // Fetch watchers on component mount

  const fetchWatchers = async () => {
    try {
      const fetchedWatchers = await watcherService.query(); // Retrieve watchers from the service
      setWatchers(fetchedWatchers);
    } catch (error) {
      console.error("Error fetching watchers:", error);
    }
  };

  const handleRemoveWatcher = async (watcherId) => {
    try {
      await watcherService.remove(watcherId); // Remove watcher from the service
      setWatchers(watchers.filter((watcher) => watcher.id !== watcherId)); // Update state
    } catch (error) {
      console.error("Error removing watcher:", error);
    }
  };
  const handleSelectWatcher = async (watcherId) => {
    try {
      const watcher = await watcherService.get(watcherId); // Retrieve watcher from the service
      setSelectedWatcher(watcher); // Update state
    } catch (error) {
      console.error("Error selecting watcher:", error);
    }
  };

  return (
    <section className="watcher-app">
      <h2>Watchers</h2>
      <ul>
        {watchers.map((watcher) => (
          <li className="watcher-card" key={watcher.id}>
            <img src={watcher.img} alt={watcher.fullname} />
            <h3>{watcher.fullname}</h3>
            <button onClick={() => handleRemoveWatcher(watcher.id)}>
              Remove
            </button>
            <button onClick={() => handleSelectWatcher(watcher.id)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
