export const utilService = {
  loadFromStorage,
  saveToStorage,
  makeId,
  makeLorem,
  getRandomIntInclusive,
  getDayName,
  getMonthName,
  animateCSS,
  openInNewTab,
  getCurrentSeason,
  getTime,
  capitalizeFirstLetters,
};

function makeId(length = 6) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function makeLorem(size = 100) {
  const words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color",
    "of nature",
    "tuned",
    "to",
    "a live channel",
    "All",
    "this happened",
    "more or less",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    "a pleasure",
    "to",
    "burn",
  ];
  var txt = "";
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)];
    if (size >= 1) txt += " ";
  }
  return txt;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

function getDayName(date, locale) {
  date = new Date(date);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function getMonthName(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[date.getMonth()];
}
function getTime(input) {
  // Check if the input is a valid Date object
  const date = new Date(input);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  // Extracting hours, minutes, seconds, and AM/PM indicator from the date
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Adjusting hours to 12-hour format
  const adjustedHours = hours % 12 || 12;

  // Adding leading zeros to minutes and seconds if necessary
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Constructing the time string
  const timeString = `${adjustedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

  return timeString;
}

//
function animateCSS(el, animation = "bounce") {
  const prefix = "animate__";
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    el.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      el.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    el.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
}
function openInNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

// Function to get current season based on the month
function getCurrentSeason(date) {
  const month = date.getMonth() + 1; // Month is 0-indexed
  if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 11) {
    return "autumn";
  } else {
    return "winter";
  }
}

function capitalizeFirstLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}
