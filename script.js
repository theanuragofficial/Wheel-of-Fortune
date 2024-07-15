const wheelAudio = new Audio(
  "https://cdn.freesound.org/previews/717/717495_15555277-lq.mp3"
);
wheelAudio.loop = true;

const container = document.querySelector(".container");
const wheel = container.querySelector(".wheel");
const spin = container.querySelector(".spin");

const emojiResult = document.querySelector(".result");

let timeout;
let animation;
let previousEndDegree = 0;

function updateResult() {
  const degree = Math.round(previousEndDegree % 360);

  // [Left, Right, Emoji]
  if (degree <= 103 && degree >= 77) {
    emojiResult.innerHTML = "🤩";
  } else if (degree <= 76 && degree >= 48) {
    emojiResult.innerHTML = "😎";
  } else if (degree <= 47 && degree >= 18) {
    emojiResult.innerHTML = "😁";
  } else if (degree <= 347 && degree >= 317) {
    emojiResult.innerHTML = "🤪";
  } else if (degree <= 316 && degree >= 287) {
    emojiResult.innerHTML = "🤭";
  } else if (degree <= 286 && degree >= 258) {
    emojiResult.innerHTML = "😋";
  } else if (degree <= 257 && degree >= 227) {
    emojiResult.innerHTML = "😍";
  } else if (degree <= 226 && degree >= 197) {
    emojiResult.innerHTML = "🥰";
  } else if (degree <= 196 && degree >= 167) {
    emojiResult.innerHTML = "🥳";
  } else if (degree <= 166 && degree >= 138) {
    emojiResult.innerHTML = "🤗";
  } else if (degree <= 137 && degree >= 104) {
    emojiResult.innerHTML = "😘";
  } else {
    emojiResult.innerHTML = "😉";
  }

  wheelAudio.pause();
}
updateResult();

spin.addEventListener("click", () => {
  if (animation) {
    clearTimeout(timeout);
    animation.cancel();
    wheelAudio.pause();
  }

  wheelAudio.currentTime = 0;
  wheelAudio.play();

  const deltaDegree = Math.random() * 360 + 1800;
  const newEndDegree = previousEndDegree + deltaDegree;

  animation = wheel.animate(
    [
      { transform: `rotate(${previousEndDegree}deg)` },
      { transform: `rotate(${newEndDegree}deg)` },
    ],
    {
      duration: 4000,
      direction: "normal",
      easing: "cubic-bezier(0.440, -0.205, 0.000, 1.130)",
      fill: "forwards",
      iterations: 1,
    }
  );

  previousEndDegree = newEndDegree;
  timeout = setTimeout(() => updateResult(), 4000);
});
