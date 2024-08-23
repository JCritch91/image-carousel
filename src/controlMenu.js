function controlMenu() {
  const contentTop = document.querySelector(".contentTop");

  const minimise = () => {
    contentTop.classList.remove("extended");
    contentTop.classList.add("minimised");
  };

  const extend = () => {
    contentTop.classList.remove("minimised");
    contentTop.classList.add("extended");
  };

  contentTop.classList.contains("extended") ? minimise() : extend();
}

export { controlMenu };
