const ratingList = document.querySelector(".rating-list");
const li = document.querySelectorAll(".rating-list li");
const button = document.querySelector(".submit-button");
const ratingForm = document.querySelector(".rating-form");
const selectionInfo = document.querySelector(".selection-info");
const thankYouCard = document.querySelector(".thanks-wrapper");
console.log(button);
localStorage.removeItem("rating");
ratingList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "LI") {
    return;
  }
  li.forEach((el) => {
    el.classList.remove("selected-rating");
  });
  localStorage.setItem("rating", event.target.value);
  event.target.classList.add("selected-rating");
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  const rating = localStorage.getItem("rating");
  if (rating === null) {
    alert("Please chose a rating");
    return;
  }
  ratingForm.classList.add("hide");
  thankYouCard.classList.remove("hide");
  selectionInfo.innerHTML = `You selected ${rating} out of 5`;
});
