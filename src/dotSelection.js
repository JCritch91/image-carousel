function dotSelection(pictureArray, e) {
  let id = e.target.id.slice(-1);

  let unsortedArray = pictureArray.sort((a, b) => a.id - b.id);

  const loopPictures = () => {
    for (let i = 0; i < unsortedArray.length; i++) {
      if (unsortedArray[i].position == 0) {
        unsortedArray[i].position = unsortedArray.length;
      }
      unsortedArray[i].position--;
    }
    return unsortedArray;
  };

  while (unsortedArray[id].position !== 0) {
    loopPictures();
  }
}

export { dotSelection };
