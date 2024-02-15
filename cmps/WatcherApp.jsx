import { watcherService } from "../services/watcher.service.js";
const { useState, useEffect } = React;

export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);

  useEffect(() => {
    loadWatchers();
  }, []);

  const loadWatchers = async () => {
    const data = await watcherService.query();
    setWatchers(data);
  };

  const removeWatcher = async (watcherId) => {
    await watcherService.remove(watcherId);
    setWatchers(watchers.filter((watcher) => watcher.id !== watcherId));
  };

  const addWatcher = async () => {
    const fullName = prompt("Enter full name:");
    const movies = prompt("Enter movies (comma-separated):").split(",");
    const newWatcher = {
      id: `w${Date.now()}`,
      fullName,
      movies: movies.map((movie) => movie.trim()),
    };
    await watcherService.add(newWatcher);
    setWatchers([...watchers, newWatcher]);
  };

  const handleWatcherSelect = (watcher) => {
    setSelectedWatcher(watcher);
  };

  const closeModal = () => {
    setSelectedWatcher(null);
  };

  return (
    <div>
      <h1>Watcher App</h1>
      <button onClick={addWatcher}>Add Watcher</button>
      <ul>
        {watchers.map((watcher) => (
          <li key={watcher.id}>
            {watcher.fullName} -{" "}
            <button onClick={() => removeWatcher(watcher.id)}>Remove</button>
            <button onClick={() => handleWatcherSelect(watcher)}>Select</button>
          </li>
        ))}
      </ul>
      {selectedWatcher && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedWatcher.fullName}</h2>
            <ul>
              {selectedWatcher.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
