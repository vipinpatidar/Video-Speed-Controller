const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handelChange(e) {
  let y = e.pageY - this.offsetTop;
  //   console.log(y, this.offsetTop, this.offsetHeight);
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;

  const heightPercent = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = heightPercent;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handelChange);
