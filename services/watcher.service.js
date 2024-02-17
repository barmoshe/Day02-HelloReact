import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";

const WATCHER_KEY = "watchersDB";
_createWatchers();

export const watcherService = {
  query,
  get,
  remove,
  save,
};

//query function - returns all watchers
function query() {
  return storageService.query(WATCHER_KEY).then((watchers) => {
    return watchers;
  });
}

//get function - returns a watcher by id
function get(watcherId) {
  return storageService.get(WATCHER_KEY, watcherId).then((watcher) => {
    return watcher;
  });
}

//remove function - removes a watcher by id
function remove(watcherId) {
  return storageService.remove(WATCHER_KEY, watcherId);
}

//save function - saves a watcher
function save(watcher) {
  watcher.img = `https://robohash.org/${watcher.id}`;
  if (watcher.id) {
    return storageService.put(WATCHER_KEY, watcher);
  } else {
    return storageService.post(WATCHER_KEY, watcher);
  }
}

function _createWatchers() {
  let watchers = utilService.loadFromStorage(WATCHER_KEY);
  if (!watchers || !watchers.length) {
    watchers = [
      {
        id: utilService.makeId(),
        fullname: "jerry smith",
        movies: ["Rambo", "Avatar"],
      },
      {
        id: utilService.makeId(),
        fullname: "rick sanchez",
        movies: ["Rambo", "Rocky"],
      },
      {
        id: utilService.makeId(),
        fullname: "Bojack Horseman",
        movies: ["Rambo", "Rocky", "Avatar"],
      },
      {
        id: utilService.makeId(),
        fullname: "homer simpson",
        movies: ["Rambo", "Rocky", "Avatar"],
      },
    ];
    watchers = watchers.map((watcher) => {
      watcher.fullname = utilService.capitalizeFirstLetters(watcher.fullname);
      watcher.img = `https://robohash.org/${watcher.id}`;
      return watcher;
    });
    utilService.saveToStorage(WATCHER_KEY, watchers);
  }
}

get;
