import { menuData } from "./menuData";
import itemCard from "./itemCard";
export default function () {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuData.forEach((item) => {
    menuContainer.appendChild(itemCard(item));
  });

  return menuContainer;
}
