export default function homepageSection() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const heading = document.createElement("h1");
  heading.textContent = "Come on down for some delecious cuisine!";
  homeContainer.appendChild(heading);

  const subheading = document.createElement("h3");
  subheading.textContent = "Tasty and affordable!";
  homeContainer.appendChild(subheading);

  return homeContainer;
}
