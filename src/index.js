import top from "./top/top";
import homepage from "./homepage/homepage";
import menu from "./menu/menu";
import buttonSection from "./buttonSection";
const content = document.getElementById("content");
function renderPage(toRender) {
  const container = document.createElement("div");
  console.log(top());
  container.appendChild(top());
  container.appendChild(buttonSection());
  if (toRender === "homepage") container.appendChild(homepage());
  else container.appendChild(menu());
  content.replaceChildren(container);
}
renderPage("homepage");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("home-button")) renderPage("homepage");
  else if (e.target.classList.contains("menu-button")) renderPage("menupage");
});
