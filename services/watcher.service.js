import { utilService } from "./util.service.js";
import { storageService } from "./async-storage.service.js";

const WATCHER_KEY = "watchersDB";
_createWatchers();

export const watcherService = {
  query,
  get,
  remove,
  save,
  saveNew,
  createWatcerEntity,
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
  return storageService.put(WATCHER_KEY, watcher);
}
function saveNew(watcher) {
  return storageService.post(WATCHER_KEY, watcher);
}
function createWatcerEntity(fullname, movies) {
  const watcher = {
    id: utilService.makeId(),
    fullname,
    movies,
  };
  watcher.img = `https://robohash.org/${watcher.id}`;
  return watcher;
}

function _createWatchers() {
  let watchers = utilService.loadFromStorage(WATCHER_KEY);
  if (!watchers || !watchers.length) {
    watchers = [
      {
        id: utilService.makeId(),
        fullname: "afik papo",
        movies: ["buko", "Haram"],
      },
      {
        id: utilService.makeId(),
        fullname: "itay shechter",
        movies: ["Rambo", "Rocky"],
      },
      {
        id: utilService.makeId(),
        fullname: "neoray segev",
        movies: ["Rambo", "Rocky", "Avatar"],
      },
      {
        id: utilService.makeId(),
        fullname: "ofir ben eli",
        movies: [
          "Rambo",
          "Rocky",
          "Avatar",
          "The Matrix",
          "The Godfather",
          "The Shawshank Redemption",
          "The Dark Knight",
        ],
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
