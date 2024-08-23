import { dotSelection } from "./dotSelection";
import { updateStorage } from "./storage";

function deletePic(pictureArray) {
  let currentPic = pictureArray[0].id;
  pictureArray.splice(0, 1);
  updateStorage("pictureArray", pictureArray);

  for (let i = 0; i < pictureArray.length; i++) {
    pictureArray[i].id = i;
  }
  dotSelection(pictureArray, currentPic);

}

export { deletePic };
