// =========================================================
// RAJ EDITZ - SCRIPT.JS
// =========================================================


// ================= DAY / NIGHT MODE =================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.onclick = () => {
    document.body.classList.toggle("light");

    themeBtn.innerHTML =
      document.body.classList.contains("light")
        ? "🌞"
        : "🌙";
  };
}


// ================= LOADING SCREEN =================

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader = document.getElementById("loader");

    if (loader) {
      loader.style.display = "none";
    }

  }, 1500);

});


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (!topBtn) return;

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});


if (topBtn) {

  topBtn.onclick = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

}


// ================= DOWNLOAD COUNTER =================

let count = 0;

const downloadText = document.getElementById("downloads");

if (downloadText) {

  const counterInterval = setInterval(() => {

    if (count < 9999) {

      count += 37;

      if (count > 9999) {
        count = 9999;
      }

      downloadText.innerText = count + "+";

    } else {

      clearInterval(counterInterval);

    }

  }, 40);

}


// ================= MUSIC =================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


if (music && musicBtn) {

  musicBtn.onclick = () => {

    if (music.paused) {

      music.play()
        .then(() => {
          musicBtn.innerHTML = "⏸ Music";
        })
        .catch(() => {
          alert("Music play nahi ho pa raha.");
        });

    } else {

      music.pause();

      musicBtn.innerHTML = "🎵 Music";

    }

  };

}


// ================= BANNER SLIDER =================

const slides = document.querySelectorAll(
  ".banner-slider .slide"
);

const dots = document.querySelectorAll(
  ".banner-slider .dot"
);

let currentSlide = 0;


// Show Slide

function showSlide(index) {

  if (slides.length === 0) return;

  if (index >= slides.length) {
    currentSlide = 0;
  }

  else if (index < 0) {
    currentSlide = slides.length - 1;
  }

  else {
    currentSlide = index;
  }


  // Remove active from all slides

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });


  // Remove active from all dots

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });


  // Activate current slide

  slides[currentSlide].classList.add("active");


  // Activate current dot

  if (dots[currentSlide]) {
    dots[currentSlide].classList.add("active");
  }

}


// Next / Previous

function changeSlide(direction) {

  showSlide(currentSlide + direction);

}


// Dot navigation

function goToSlide(index) {

  showSlide(index);

}


// Automatic Slider

if (slides.length > 1) {

  setInterval(() => {

    changeSlide(1);

  }, 4000);

}


// ================= CONTACT FORM =================

const contactButton =
  document.querySelector(".contact-form button");


if (contactButton) {

  contactButton.addEventListener("click", () => {

    alert(
      "Thanks for contacting Raj Editz! ❤️"
    );

  });

}