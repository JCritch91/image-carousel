import { dotSelection } from "./dotSelection";

function displayPicture(pictureArray) {
  const pictureCarousel = document.querySelector(".pictureCarousel");
  const dotContainer = document.querySelector(".dotContainer");
  pictureCarousel.replaceChildren();
  dotContainer.replaceChildren();

  let unsortedArray = pictureArray.sort((a, b) => a.id - b.id);

  for (let n = 0; n < unsortedArray.length; n++) {
    let button;
    button = document.createElement("button");
    button.setAttribute("id", `dot${unsortedArray[n].id}`);
    button.classList.add("dotButton");
    if (unsortedArray[n].position == 0) {
      button.classList.add("current");
    }
    button.addEventListener("click", (e) => {
      dotSelection(unsortedArray, e.target.id.slice(-1));
      displayPicture(unsortedArray);
    });
    dotContainer.appendChild(button);
  }

  let sortedArray = pictureArray.sort((a, b) => a.position - b.position);

  for (let i = 0; i < pictureArray.length; i++) {
    let div;

    div = document.createElement("div");
    div.setAttribute("id", pictureArray[i].id);
    div.classList.add("picture", "position" + pictureArray[i].position + "'");

    if (pictureArray[i].position == "0") {
      div.style.backgroundImage = `url(${pictureArray[i].url})`;
    }
    pictureCarousel.appendChild(div);
  }
}

export { displayPicture };
