const articleButton = document.getElementById("article-button");

const changeDisplayBottom = () => {
  const hiddenGroup = document.querySelector(".group-hidden");
  const defaultGroup = document.querySelector(".group-default");
  const articleBottom = document.querySelector(".article__bottom");

  hiddenGroup.classList.toggle("hidden");
  defaultGroup.classList.toggle("hidden");
  articleBottom.classList.toggle("bottom-active");
};

articleButton.addEventListener("click", (e) => changeDisplayBottom());
