const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAllCalasess();
    panel.classList.add("active");
  });
});

function removeAllCalasess() {
  panels.forEach((panel) => {
      panel.classList.remove("active");
  });
}
