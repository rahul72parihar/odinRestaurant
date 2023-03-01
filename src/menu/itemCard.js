export default function itemCard(item) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const cardImage = document.createElement("img");
  cardImage.src = item.img;
  cardContainer.appendChild(cardImage);

  const cardName = document.createElement("h2");
  cardName.textContent = item.name;
  cardContainer.appendChild(cardName);

  const cardPrice = document.createElement("h2");
  cardPrice.classList.add("green-text");
  cardPrice.textContent = `₹${item.price}`;
  cardContainer.appendChild(cardPrice);

  return cardContainer;
}
