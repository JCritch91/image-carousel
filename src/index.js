import "./style.css";
import { createDemoPictures } from "./newPicture";
import { displayPicture } from "./displayPicture";
import { changeOrder } from "./changeOrder";

function initialise() {
  const navButtons = document.querySelectorAll("button");
  const pictureArray = [];

  createDemoPictures(pictureArray);
  displayPicture(pictureArray);

  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      changeOrder(pictureArray, e.target.id);
      displayPicture(pictureArray);
    });
  });

  function autoScroll() {
    changeOrder(pictureArray, "rightButton");
    displayPicture(pictureArray);
  }

  setInterval(autoScroll, 3000);
}

initialise();
