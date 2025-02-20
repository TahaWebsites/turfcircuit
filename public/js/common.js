document.addEventListener("DOMContentLoaded", function () {
  const defaultColors = {
      primaryColor: "black",
      secondaryColor: "#08a88a",
      thirdColor: "rgba(8, 168, 138, 0.8)",
      fourthColor: "white"
  };

  // Check if colors are already in localStorage, if not, set them
  Object.keys(defaultColors).forEach((key) => {
      if (!localStorage.getItem(key)) {
          localStorage.setItem(key, defaultColors[key]);
      }
  });

  // Apply colors from localStorage
  applyThemeColors();

  document.querySelectorAll('.developerInfo p')[[5].innerHtml = "<a href=`https://appsgeyser.io/18604476/TurfCircuit?_ga=2.170695456.1690638858.1740046197-1226163925.1740046197` style="text-decoration: underline;">Download</a> our app for smoother experience (Android
                only)";
});

function applyThemeColors() {
  document.documentElement.style.setProperty("--primaryColor", localStorage.getItem("primaryColor"));
  document.documentElement.style.setProperty("--secondaryColor", localStorage.getItem("secondaryColor"));
  document.documentElement.style.setProperty("--thirdColor", localStorage.getItem("thirdColor"));
  document.documentElement.style.setProperty("--fourthColor", localStorage.getItem("fourthColor"));
}


const savedPrimaryColor = localStorage.getItem("primaryColor");
const savedSecondaryColor = localStorage.getItem("secondaryColor");
const savedThirdColor = localStorage.getItem("thirdColor");
const savedFourthColor = localStorage.getItem("fourthColor");

if (savedPrimaryColor) {
  document.documentElement.style.setProperty("--primaryColor", savedPrimaryColor);
}
if (savedSecondaryColor) {
  document.documentElement.style.setProperty("--secondaryColor", savedSecondaryColor);
}
if (savedThirdColor) {
  document.documentElement.style.setProperty("--thirdColor", savedThirdColor);
}
if (savedFourthColor) {
  document.documentElement.style.setProperty("--fourthColor", savedFourthColor);
}

const lordIcon = document.querySelector('.navbar .title lord-icon');
const profilelordIcon = document.querySelector('.profileIcon lord-icon');
const pageTitle = document.title;
if (pageTitle != 'TurfCircuit | Home') {
  lordIcon.setAttribute('colors', `primary:${savedSecondaryColor},secondary:${savedSecondaryColor}`);
  profilelordIcon.setAttribute('colors', `primary:${savedSecondaryColor},secondary:${savedSecondaryColor}`);
}

let uclProfiles = ["https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250052469.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250121533.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/74699.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250176450.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250080471.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250076574.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250172668.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250121965.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250073809.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250128377.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250147342.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250106939.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250169705.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250128270.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250101696.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250156002.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250061507.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250027008.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250103561.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250171278.webp",
  "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250056189.webp"
]

document.querySelectorAll('.playerPfp').forEach(pfp => {
  const randomNumber = Math.floor(Math.random() * uclProfiles.length);
  pfp.setAttribute('src', uclProfiles[randomNumber]);
});


const copyright = document.querySelector('.Copyright');
const devInfo = document.querySelector('.devInfoParentDiv');
const devInfoExit = document.querySelector('.devInfoExit');
copyright.addEventListener('click', () => {

  devInfo.style.display = "flex";
})

devInfoExit.addEventListener('click', (e) => {
  e.preventDefault();

  devInfo.style.display = "none";
})
