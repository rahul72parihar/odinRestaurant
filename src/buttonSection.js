export default function buttonSection() {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("button-container");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-button");
  homeBtn.textContent = "HOME";
  btnContainer.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "MENU";
  menuBtn.classList.add("menu-button");

  btnContainer.appendChild(menuBtn);

  return btnContainer;
}
