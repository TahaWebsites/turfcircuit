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