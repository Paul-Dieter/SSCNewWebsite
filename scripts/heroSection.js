const video = document.querySelector(".hero-video");
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

video.addEventListener("ended", () => {
  video.pause();
  video.currentTime = video.duration;
});

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});