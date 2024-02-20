import { utilService } from "../services/util.service.js";
import { watcherService } from "../services/watcher.service.js";
import { WatcherDetails } from "./WatcherDetails.jsx";
//import { AddWatcherForm } from "./AddWatcherForm.jsx";
import { GenericModal } from "./GenericModal.jsx";
import { AddWatcherForm } from "./AddWatcherForm.jsx";
const { useState, useEffect } = React;
export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);
  const [isAddWatcherModalOpen, setIsAddWatcherModalOpen] = useState(false);

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
  const handleAddWatcher = async (fullname, movies) => {
    try {
      const watcher = watcherService.createWatcerEntity(fullname, movies); // Create new watcher
      await watcherService.saveNew(watcher); // Save new watcher to the service
      setWatchers([...watchers, watcher]); // Update state
      setIsAddWatcherModalOpen(false); // Close modal
      fetchWatchers(); // Fetch watchers again to update the list
    } catch (error) {
      console.error("Error adding watcher:", error);
    }
  };
  const handleEditWatcher = async (watcherId, fullname) => {
    try {
      const watcher = await watcherService.get(watcherId); // Retrieve watcher from the service
      watcher.fullname = fullname; // Update watcher's fullname
      await watcherService.save(watcher); // Save watcher to the service
      setWatchers(watchers.map((w) => (w.id === watcherId ? watcher : w))); // Update state
      setSelectedWatcher(null); // Close modal
    } catch (error) {
      console.error("Error editing watcher:", error);
    }
  };
  const handleAddWatcherButton = () => {
    setIsAddWatcherModalOpen(true);
  };
  const handleAddWatcherModalClose = () => {
    setIsAddWatcherModalOpen(false);
  };
  //    onSubmitEdit(watcher.id, fullname);
  return (
    <section className="watcher-app">
      <h2>Watchers</h2>
      {watchers.length === 0 ? (
        <p>no watchers to view</p>
      ) : (
        <p>Click on a watcher to see details</p>
      )}
      {isAddWatcherModalOpen && (
        <GenericModal onClose={handleAddWatcherModalClose}>
          <AddWatcherForm onAddWatcher={handleAddWatcher} />
        </GenericModal>
      )}
      {selectedWatcher && (
        <GenericModal onClose={() => setSelectedWatcher(null)}>
          <WatcherDetails
            watcher={selectedWatcher}
            onSubmitEdit={(watcherId, fullname) => {
              handleEditWatcher(watcherId, fullname);
            }}
          />
        </GenericModal>
      )}
      <ul>
        {watchers.map((watcher) => (
          <li className="watcher-card" key={watcher.id}>
            <div onClick={() => handleSelectWatcher(watcher.id)}>
              <img src={watcher.img} alt={watcher.fullname} />
              <h3>{watcher.fullname}</h3>
            </div>
            <button onClick={() => handleRemoveWatcher(watcher.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <button className="add-watcher" onClick={handleAddWatcherButton}>
          Add Watcher
        </button>
      </div>
    </section>
  );
}
