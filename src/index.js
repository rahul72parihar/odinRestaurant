import buttonSection from "./buttonSection";
import homepageSection from "./homepage/homepage";
import menuSection from "./menu/menu";
import topSection from "./top/top";
const content = document.getElementById("content");

function renderPage(section) {
  const contentContainer = document.createElement("div");

  contentContainer.appendChild(topSection());
  contentContainer.appendChild(buttonSection());
  const sectionToRender =
    section === "homepage" ? homepageSection() : menuSection();
  contentContainer.appendChild(sectionToRender);

  content.replaceChildren(contentContainer);
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("home-button")) {
    renderPage("homepage");
  } else if (e.target.classList.contains("menu-button")) {
    renderPage("menupage");
  }
});

//load homepage by default
renderPage("homepage");
