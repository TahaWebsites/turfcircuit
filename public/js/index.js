let matches = document.querySelector(".matches");
let weekPlayers = document.querySelector(".weekPlayers");
let clips = document.querySelector(".weekClips");
let sliderDots = document.querySelectorAll(".circles");
let playerMonth = document.querySelectorAll(".playerMonth");

let slides = [matches, weekPlayers, clips];
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = i === 0 ? "block" : "flex";
      slide.style.opacity = "1";
      slide.style.transition = "opacity 1s";
    } else {
      slide.style.display = "none";
      slide.style.opacity = "0";
    }
  });
  sliderDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function startAutoSlide() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 10000);
}

function activatedSlider() {
  sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });
}

function playerMonthSlider() {
  let playerMonth = document.querySelectorAll('.playerMonth');
  let currentIndex = 0;

  setInterval(() => {
    playerMonth.forEach(player => player.classList.remove('playerSlider'));
    playerMonth[currentIndex].classList.add('playerSlider');
    currentIndex = (currentIndex + 1) % playerMonth.length; 
  }, 3000);
}


function quoteSlider() {
  let count = 1;
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const quote = document.querySelector(".quotes-quote");
  const quoteContainer = document.querySelector(".quotes-container");
  window.onload = function () {
    quote.textContent = quotes[count - 1];
  };
  let quote1 =
    "The greatest glory in living lies not in never falling, but in rising every time we fall";
  let quote2 =
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking";
  let quote3 =
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough";
  let quote4 =
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.";
  let quote5 = "You must be the change you wish to see in the world.";
  let pcount = document.querySelector(".maincounter");

  let quotes = [quote1, quote2, quote3, quote4, quote5];

  left.addEventListener("click", () => {
    if (count == 1) count = 5;
    else count--;
    quote.textContent = quotes[count - 1];
    pcount.textContent = count;
  });
  right.addEventListener("click", () => {
    if (count == 5) count = 1;
    else count++;
    quote.textContent = quotes[count - 1];
    pcount.textContent = count;
  });
}



showSlide(currentIndex);
activatedSlider();
startAutoSlide();
playerMonthSlider();
quoteSlider();