const restaurantCardsContainer = document.querySelector(
  ".restaurantCardsContainer"
);

if (restaurantCardsContainer) {
  let isDragging = false;
  let startX, scrollLeft;

  restaurantCardsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - restaurantCardsContainer.offsetLeft;
    scrollLeft = restaurantCardsContainer.scrollLeft;
    restaurantCardsContainer.style.cursor = "grabbing";
    e.preventDefault();
  });

  restaurantCardsContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    restaurantCardsContainer.style.cursor = "grab";
  });

  restaurantCardsContainer.addEventListener("mouseup", () => {
    isDragging = false;
    restaurantCardsContainer.style.cursor = "grab";
  });

  restaurantCardsContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.pageX - restaurantCardsContainer.offsetLeft;
    const walk = (x - startX) * 3;
    restaurantCardsContainer.scrollLeft = scrollLeft - walk;
  });
} else {
  console.error('Element with class "restaurantCardsContainer" not found.');
}

function validateEmailInput(event) {
  let inputElement = event.target;
  let inputValue = inputElement.value;

  if (!inputValue.includes("@")) {
    inputElement.classList.add("is-invalid");
  } else {
    inputElement.classList.remove("is-invalid");
  }
}

let emailInput = document.querySelector(".mailInput");
emailInput.addEventListener("input", validateEmailInput);
emailInput.addEventListener("blur", (event) => {
  let inputElement = event.target;

  inputElement.classList.remove("is-invalid")
});
