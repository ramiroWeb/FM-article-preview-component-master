const articleButton = document.getElementById("article-button");

const changeDisplayBottom = () => {
  const hiddenGroup = document.querySelector(".hidden-group");
  const defaultGroup = document.querySelector(".default-group");
  const articleBottom = document.querySelector(".article__bottom");

  hiddenGroup.classList.toggle("hidden");
  defaultGroup.classList.toggle("hidden");
  articleBottom.classList.toggle("bottom-socials");
  console.log("ejecutando");
  buttonDisplay();
};
const buttonDisplay = () => {
  articleButton.classList.toggle("button-active");
};
articleButton.addEventListener("click", (e) => changeDisplayBottom());
