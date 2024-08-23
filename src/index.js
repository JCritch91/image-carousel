import "./style.css";
import { createDemoPictures } from "./newPicture";
import { displayPicture } from "./displayPicture";
import { changeOrder } from "./changeOrder";
import { controlMenu } from "./controlMenu";
import { addNewPic } from "./addNewPic";
import { deletePic } from "./deletePic";

function initialise() {
  const navButtons = document.querySelectorAll(".navButton");
  const addImageButton = document.querySelector(".addImageButton");
  const submitImageButton = document.querySelector(".submitImageButton");
  const deletePicButton = document.getElementById("deletePicButton");
  const pictureArray = [];

  createDemoPictures(pictureArray);
  displayPicture(pictureArray);

  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      changeOrder(pictureArray, e.target.id);
      displayPicture(pictureArray);
    });
  });

  addImageButton.addEventListener("click", () => {
    controlMenu();
  });

  submitImageButton.addEventListener("click", () => {
    controlMenu();
    addNewPic(pictureArray);
    displayPicture(pictureArray);
  });

  deletePicButton.addEventListener("click", (e) => {
    deletePic(pictureArray);
    displayPicture(pictureArray);
  });

  function autoScroll() {
    changeOrder(pictureArray, "rightButton");
    displayPicture(pictureArray);
  }

  setInterval(autoScroll, 3000);
}

initialise();
