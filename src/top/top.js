export default function () {
  const container = document.createElement("div");
  container.classList.add("top");
  const heading = document.createElement("h1");
  heading.textContent = "HEADING OF TOP";
  container.appendChild(heading);
  return container;
}
