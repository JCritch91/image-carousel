import "./style.css";
import { createDemoPictures } from "./newPicture";
import { displayPicture } from "./displayPicture";
import { changeOrder } from "./changeOrder";
import { controlMenu } from "./controlMenu";
import { addNewPic } from "./addNewPic";
import { deletePic } from "./deletePic";
import { storageAvailable, updateStorage } from "./storage";

function initialise() {
  const navButtons = document.querySelectorAll(".navButton");
  const addImageButton = document.querySelector(".addImageButton");
  const submitImageButton = document.querySelector(".submitImageButton");
  const deletePicButton = document.getElementById("deletePicButton");
  let pictureArray = [];

  if (storageAvailable("localStorage")) {
    if (!localStorage.getItem("pictureArray")) {
      createDemoPictures(pictureArray);
      updateStorage("pictureArray", pictureArray);
    } else {
      let storedpictureArray = JSON.parse(localStorage.getItem("pictureArray"));
      pictureArray = storedpictureArray;
      if (pictureArray.length == 0) {
        createDemoPictures(pictureArray);
      }
    }
  } else {
    createDemoPictures(pictureArray);
  }

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
    updateStorage("pictureArray", pictureArray);
    displayPicture(pictureArray);
  });

  function autoScroll() {
    changeOrder(pictureArray, "rightButton");
    displayPicture(pictureArray);
  }

  setInterval(autoScroll, 3000);
}

initialise();
