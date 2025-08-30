const video = document.querySelector(".hero-video");

video.addEventListener("ended", () => {
  video.pause();
  video.currentTime = video.duration;
});