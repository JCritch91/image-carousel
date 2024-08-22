function changeOrder(pictureArray, e) {
  const dotButton = document.querySelectorAll(".dotButton");
  dotButton.forEach((dot) => {
    dot.classList.remove("current");
  });

  const moveRight = (pictureArray) => {
    for (let i = 0; i < pictureArray.length; i++) {
      if (pictureArray[i].position == 0) {
        pictureArray[i].position = pictureArray.length;
      }
      pictureArray[i].position--;
    }
  };

  const moveLeft = (pictureArray) => {
    for (let i = 0; i < pictureArray.length; i++) {
      if (pictureArray[i].position == pictureArray.length - 1) {
        pictureArray[i].position = -1;
      }
      pictureArray[i].position++;
    }
  };

  e == "leftButton" ? moveLeft(pictureArray) : moveRight(pictureArray);
}

export { changeOrder };
