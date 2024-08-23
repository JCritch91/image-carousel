import { dotSelection } from "./dotSelection";
import { newPicture } from "./newPicture";

function addNewPic(pictureArray) {
  let currentPic = pictureArray[0].id;
  let unsortedArray = pictureArray.sort((a, b) => a.id - b.id);
  dotSelection(unsortedArray, 0);
  const picInput = document.getElementById("picInput");

  let id, url, position;
  id = unsortedArray.length;
  url = picInput.value;
  position = id;

  pictureArray.push(newPicture(id, url, position));
  dotSelection(pictureArray, currentPic);
  picInput.value = '';
}

export { addNewPic };
