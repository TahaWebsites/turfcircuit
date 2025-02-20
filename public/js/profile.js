let stats = document.querySelectorAll(".playerStats");
let progress = document.querySelectorAll(".innerProgress");
let displayPercentage = document.querySelectorAll(".progressBar p");
let previousGames = document.querySelectorAll(".previousGamesTable tr");
let achievements = document.querySelectorAll(".achievements li");
let edit = document.querySelectorAll(".pencil-icon");
let tick = document.querySelectorAll(".tick-icon");
let data = document.querySelectorAll(".data");
let input = document.querySelectorAll(".updateInputFields");
let save = document.querySelector(".formSubmit");
let profileSettings = document.querySelector(".settingsPageWrapper");
let settings = document.querySelector(".editInfo");
let profileTab = document.querySelector(".profileSettings");
let themeSelector = document.querySelector(".appearanceSettings");
let profileBtn = document.querySelector(".profileTab");
let themeBtn = document.querySelector(".themeTab");
let setThemeBtn = document.querySelector(".setTheme");
let saveThemeBtn = document.querySelector(".setTheme");
let privacyBtn = document.querySelector(".privacyTab");
let privacySettings = document.querySelector(".privacySettings")
let themesList = document.querySelector(".themeSelector");
let themes = themesList.options;
const rootStyles = getComputedStyle(document.documentElement);

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

function displayChange(element) {
  for (let i = 0; i < element.length; i++) {
    if (i % 2 === 1) {
      element[i].style.backgroundColor = savedSecondaryColor;
      element[i].style.color = savedPrimaryColor;
    }
  }
}

function setProgress() {
  for (let i = 0; i < progress.length; i++) {
    let max = 100;
    let randomInt = Math.floor(Math.random() * max);
    progress[i].style.width = `${randomInt}%`;
    displayPercentage[i].innerText = `${randomInt}%`;
  }
}

function toggleInput() {
  edit.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      input[index].style.display = "initial";
      data[index].style.display = "none";
      tick[index].style.display = "initial";
      edit[index].style.display = "none";
    });
  });
}

function clickTick() {
  tick.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      input[index].style.display = "none";
      data[index].style.display = "initial";
      edit[index].style.display = "initial";
      tick[index].style.display = "none";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const save = document.getElementById("save"); // Adjust selector as needed
  const settings = document.getElementById("settings"); // Adjust selector as needed
  const profileSettings = document.getElementById("profileSettings"); // Adjust selector as needed

  if (!save || !settings || !profileSettings) {
    console.error("One or more elements not found");
    return;
  }

  save.addEventListener("click", () => {
    profileSettings.style.display = "none";
  });

  settings.addEventListener("click", () => {
    profileSettings.style.display =
      profileSettings.style.display === "none" ? "flex" : "none";
  });
});

themeBtn.addEventListener("click", () => {
  profileTab.style.display = "none";
  privacySettings.stlye.display = "none"
  themeSelector.style.display = "flex";
});

profileBtn.addEventListener("click", () => {
  themeSelector.style.display = "none";
  privacySettings.stlye.display = "none"
  profileTab.style.display = "initial";
});

privacyBtn.addEventListener("click", () => {
  themeSelector.style.display = "none";
  profileTab.style.display = "none";
  privacySettings.stlye.display = "flex"
});

setThemeBtn.addEventListener("click", () => {
  profileSettings.style.display = "none";
  0;
});

themesList.addEventListener("change", () => {
  let selectedTheme = themesList.options[themesList.selectedIndex];

  let chosenTheme = selectedTheme.value;
  switch (chosenTheme) {
    case "Barcelona":
      document.documentElement.style.setProperty("--primaryColor", "#004D98");
      document.documentElement.style.setProperty("--secondaryColor", "#A50044");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(239, 239, 239, 0.8)"
      );
      document.documentElement.style.setProperty("--fourthColor", "#FFFFFF");
      break;
    case "RealMadrid":
      document.documentElement.style.setProperty("--primaryColor", "#FFFFFF");
      document.documentElement.style.setProperty("--secondaryColor", "#FFC700");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(237, 237, 237, 0.8)"
      );
      document.documentElement.style.setProperty("--fourthColor", "#000000");
      break;
    case "ManUtd":
      document.documentElement.style.setProperty("--primaryColor", "#DA291C");
      document.documentElement.style.setProperty("--secondaryColor", "#B1B3B3"); // Light Gray
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(220, 0, 0, 0.8)"
      ); // Light Red
      document.documentElement.style.setProperty("--fourthColor", "#FFFFFF");
      break;
    case "ManCity":
      document.documentElement.style.setProperty("--primaryColor", "#6CABDD");
      document.documentElement.style.setProperty("--secondaryColor", "#1C2C5B");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(220, 220, 220, 0.8)"
      );
      document.documentElement.style.setProperty("--fourthColor", "#0D1B2A");
      break;
    case "Liverpool":
      document.documentElement.style.setProperty("--primaryColor", "#C8102E");
      document.documentElement.style.setProperty("--secondaryColor", "#FFFFFF");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(255, 0, 0, 0.8)"
      ); // Light Red
      document.documentElement.style.setProperty("--fourthColor", "#2D2D2D");
      break;
    case "Chelsea":
      document.documentElement.style.setProperty("--primaryColor", "#034694");
      document.documentElement.style.setProperty("--secondaryColor", "#FFFFFF");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(220, 220, 220, 0.8)"
      );
      document.documentElement.style.setProperty("--fourthColor", "#000000");
      break;
    case "Juventus":
      document.documentElement.style.setProperty("--primaryColor", "#FFFFFF");
      document.documentElement.style.setProperty("--secondaryColor", "#000000");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(240, 240, 240, 1)"
      );
      document.documentElement.style.setProperty("--fourthColor", "#7D7D7D");
      break;
    case "PSG":
      document.documentElement.style.setProperty("--primaryColor", "#F5F5F5"); // Light Gray
      document.documentElement.style.setProperty("--secondaryColor", "#DA291C"); // Red
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(255, 255, 255, 0.8)"
      ); // Lighter White
      document.documentElement.style.setProperty("--fourthColor", "#2D2D2D"); // Dark Gray
      break;
    case "BayernMunich":
      document.documentElement.style.setProperty("--primaryColor", "#DC052D");
      document.documentElement.style.setProperty("--secondaryColor", "#FFFFFF");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(255, 0, 0, 0.8)"
      ); // Light Red
      document.documentElement.style.setProperty("--fourthColor", "#000000");
      break;
    case "AcMilan":
      document.documentElement.style.setProperty("--primaryColor", "#ACABAB");
      document.documentElement.style.setProperty("--secondaryColor", "#000000");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(211, 211, 211, 0.8)"
      );
      document.documentElement.style.setProperty("--fourthColor", "#ffffff");
      break;
    case "Default":
      document.documentElement.style.setProperty("--primaryColor", "black");
      document.documentElement.style.setProperty("--secondaryColor", "#08a88a");
      document.documentElement.style.setProperty(
        "--thirdColor",
        "rgba(8, 168, 138, 0.8)"
      );
      document.documentElement.style.setProperty("--fourthColor", "white");
      break;
  }
});

saveThemeBtn.addEventListener("click", function () {
  let primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primaryColor")
    .trim();
  let secondaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--secondaryColor")
    .trim();
  let thirdColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--thirdColor")
    .trim();
  let fourthColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--fourthColor")
    .trim();

  localStorage.setItem("primaryColor", primaryColor);
  localStorage.setItem("secondaryColor", secondaryColor);
  localStorage.setItem("thirdColor", thirdColor);
  localStorage.setItem("fourthColor", fourthColor);
});

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
let randomNumber = Math.floor(Math.random() * uclProfiles.length);
document.querySelector('.responsive-image').setAttribute('src', uclProfiles[randomNumber]);

toggleInput();
clickTick();
displayChange(stats);
displayChange(previousGames);
displayChange(achievements);
setProgress();
toggleInput();

