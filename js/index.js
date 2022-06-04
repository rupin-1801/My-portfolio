const navs = document.querySelectorAll(".thumb");
const about = document.querySelector("#about");
const game = document.getElementById("game");
const skills = document.querySelector("#skill");
const projects = document.querySelector("#projects");
const btnLike = document.querySelector("#like-button");
const btnDislike = document.querySelector("#dislike-button");
const likes = document.querySelector("#like");
const dislikes = document.querySelector("#dislike");

navs[0].addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});
navs[1].addEventListener("click", () => {
  skills.scrollIntoView({ behavior: "smooth" });
});
navs[2].addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth" });
});

function toggleRating(
  button,
  nextButton,
  value,
  nextValue,
  buttonState,
  nextState,
  icon,
  nextIcon
) {
  if (buttonState && !nextState) {
    value.innerHTML = parseInt(value.textContent) - 1;
    button.classList.replace(`${icon}-fill`, icon);
  } else if (!buttonState && !nextState) {
    value.innerHTML = parseInt(value.textContent) + 1;
    button.classList.replace(icon, `${icon}-fill`);
  } else if (!buttonState && nextState) {
    value.innerHTML = parseInt(value.textContent) + 1;
    button.classList.replace(icon, `${icon}-fill`);
    nextValue.innerHTML = parseInt(nextValue.textContent) - 1;
    nextButton.classList.replace(`${nextIcon}-fill`, nextIcon);
  }
}

function preview(event) {
  const card = event.target.parentNode.parentNode;
  const cards = card.parentNode.children;
  for (let i = 0; i < cards.length; i++) {
    closeAll(cards[i]);
  }
  card.classList.add("full-card");
  const video = card.children[2];
  video.classList.add("preview-img");
  video.style.display = "block";
  video.play();
  card.children[0].style.display = "flex";
  card.children[1].style.display = "none";
}
function previewClose(event) {
  const card = event.target.parentNode.parentNode;
  const video = card.children[2];
  card.classList.remove("full-card");
  video.classList.remove("preview-img");
  video.pause();
  video.currentTime = 0;
  video.style.display = "none";
  card.children[0].style.display = "none";
  card.children[1].style.display = "block";
}
function closeAll(card) {
  const video = card.children[2];
  card.classList.remove("full-card");
  video.classList.remove("preview-img");
  video.pause();
  video.currentTime = 0;
  video.style.display = "none";
  card.children[0].style.display = "none";
  card.children[1].style.display = "block";
}
btnLike.addEventListener("click", () => {
  toggleRating(
    btnLike,
    btnDislike,
    likes,
    dislikes,
    btnLike.classList.contains("bi-hand-thumbs-up-fill"),
    btnDislike.classList.contains("bi-hand-thumbs-down-fill"),
    "bi-hand-thumbs-up",
    "bi-hand-thumbs-down"
  );
});

btnDislike.addEventListener("click", () => {
  toggleRating(
    btnDislike,
    btnLike,
    dislikes,
    likes,
    btnDislike.classList.contains("bi-hand-thumbs-down-fill"),
    btnLike.classList.contains("bi-hand-thumbs-up-fill"),
    "bi-hand-thumbs-down",
    "bi-hand-thumbs-up"
  );
});
