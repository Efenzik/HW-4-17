const imageGalleryContainer = document.querySelector(".gallery");
const loadMoreImagesButton = document.querySelector(".load-btn");

let currentPageNumber = 1;
const imagesPerPageLimit = 8;
const maximumImagesAllowed = 80;
let totalLoadedImagesCount = 0;

function fetchAndRenderImagesFromPixabay() {
  const apiUrl = `https://pixabay.com/api/?key=52764652-57f9e27a8b6ede3446aff7d97&editors_choice=true&page=${currentPageNumber}&per_page=${imagesPerPageLimit}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response) {
        throw new Error(response);
      }
      return response.json();
    })
    .then((data) => {
      const receivedImageDataArray = data.hits;

      if (
        !receivedImageDataArray.length ||
        totalLoadedImagesCount >= maximumImagesAllowed
      )
        return;

      const imageCardsMarkup = receivedImageDataArray
        .map(
          (imageItem) => `
          <div class="gallery-item">
            <img src="${imageItem.webformatURL}" alt="${imageItem.tags}">
          </div>`
        )
        .join("");

      imageGalleryContainer.insertAdjacentHTML("beforeend", imageCardsMarkup);

      totalLoadedImagesCount += receivedImageDataArray.length;

      if (totalLoadedImagesCount >= maximumImagesAllowed) {
        alert("80");
      }
    })
    .catch((error) => console.error(error));
}

fetchAndRenderImagesFromPixabay();

loadMoreImagesButton.addEventListener("click", () => {
  currentPageNumber++;
  fetchAndRenderImagesFromPixabay();
});
