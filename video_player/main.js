const video = document.querySelector(".video");
const playBtn = document.querySelector(".controls__play");
const stopBtn = document.querySelector(".controls__stop");
const playBtnImg = document.querySelector(".play__btn");
const progress = document.querySelector(".progress");
const time = document.querySelector(".controls__time");

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
    playBtnImg.src = "./icons/pause.svg";
  } else {
    video.pause();
    playBtnImg.src = "./icons/play.svg";
  }
}

playBtn.addEventListener("click", toggleVideoStatus);
video.addEventListener("click", toggleVideoStatus);

function stopVideo() {
  video.currentTime = 0;
  video.pause();
  playBtnImg.src = "./icons/play.svg";
}

stopBtn.addEventListener("click", stopVideo);

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let minutes = Math.floor(video.currentTime / 60);
  if(minutes < 10) {
    minutes = '0' + String(minutes)
  }
  let seconds = Math.floor(video.currentTime % 60);
  if(seconds < 10) {
    seconds = '0' + String(seconds)
  }

  time.innerHTML = `${minutes}:${seconds}`;
}

video.addEventListener("timeupdate", updateProgress);

function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100
}

progress.addEventListener('change', setProgress)
