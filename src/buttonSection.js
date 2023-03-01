export default function buttonSection(section) {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("button-container");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-button");
  homeBtn.textContent = "HOME";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "MENU";
  menuBtn.classList.add("menu-button");

  section === "homepage"
    ? homeBtn.classList.add("selected-btn")
    : menuBtn.classList.add("selected-btn");

  btnContainer.appendChild(homeBtn);
  btnContainer.appendChild(menuBtn);

  return btnContainer;
}
