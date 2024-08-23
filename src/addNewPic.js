import { dotSelection } from "./dotSelection";
import { newPicture } from "./newPicture";

function addNewPic(pictureArray) {
  let currentPic;
  pictureArray.length > 0
    ? (currentPic = pictureArray[0].id)
    : (currentPic = 0);

  let unsortedArray = pictureArray.sort((a, b) => a.id - b.id);
  dotSelection(unsortedArray, 0);
  const picInput = document.getElementById("picInput");

  let id, url, position;
  id = unsortedArray.length;
  if (id == undefined) {
    id = 0;
  }
  url = picInput.value;
  position = id;

  pictureArray.push(newPicture(id, url, position));
  dotSelection(pictureArray, currentPic);
  picInput.value = "";
}

export { addNewPic };
