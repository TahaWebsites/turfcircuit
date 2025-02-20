const searchInput = document.getElementById("searchProfile");
const profiles = document.querySelectorAll(".profilesContainer .profile");
const matchNotFound = document.querySelector(".matchNotFound");

function checkMatches() {
    const anyVisible = Array.from(profiles).some(profile => profile.parentElement.style.display !== "none");
    matchNotFound.style.display = anyVisible ? "none" : "block";
}

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();

    profiles.forEach(profile => {
        const details = profile.querySelectorAll(".profileDetailsinner p:nth-child(2)");

        const name = details[0]?.textContent.toLowerCase().trim() || "";
        const playerTag = details[1]?.textContent.toLowerCase().trim() || "";
        const favClub = details[3]?.textContent.toLowerCase().trim() || "";

        if (name.includes(query) || playerTag.includes(query) || favClub.includes(query)) {
            profile.parentElement.style.display = "block";
        } else {
            profile.parentElement.style.display = "none";
        }
    });

    checkMatches();
});

const totalDivs = 5;
let currentIndex = 1;

function showNextDiv() {
    for (let i = 1; i <= totalDivs; i++) {
        document.querySelector(`.playerMonth${i}`).style.display = i === currentIndex ? "block" : "none";
    }
    currentIndex = currentIndex % totalDivs + 1;
}
showNextDiv();

setInterval(showNextDiv, 3000);

checkMatches();

//common.js

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