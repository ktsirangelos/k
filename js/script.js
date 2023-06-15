"use strict";

function changeText() {
  document.getElementById("this").textContent =
    document.getElementById("this").textContent === "this website →"
      ? "already here ↩"
      : "this website →";
}
