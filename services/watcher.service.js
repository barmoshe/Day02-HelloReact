import { storageService } from "./async-storage.service.js";

const WATCHER_KEY = "watcherDB";
_createWatchers();

export const watcherService = {
  query,
  get,
  remove,
  add,
};

function query() {
  return storageService.query(WATCHER_KEY);
}

function get(watcherId) {
  return storageService.get(WATCHER_KEY, watcherId);
}

function remove(watcherId) {
  return storageService.remove(WATCHER_KEY, watcherId);
}

function add(watcher) {
  return storageService.post(WATCHER_KEY, watcher);
}

function _createWatchers() {
  let watchers = storageService.get(WATCHER_KEY);
  if (!watchers || !watchers.length) {
    watchers = _getDemoWatchers();
    storageService.post(WATCHER_KEY, watchers);
  }
  return watchers;
}

function _getDemoWatchers() {
  return [
    {
      id: "w101",
      fullName: "Oren Biton",
      movies: ["dont mess with the zohan", "the matrix"],
    },
    {
      id: "w102",
      fullName: "Yaron shauli",
      movies: ["the matrix", "the lord of the rings"],
    },
  ];
}
