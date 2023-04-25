"use strict";

const changeText = (event) => {
  const link = document.getElementById("thisWebsiteProd");
  link.text = link.text === "Go to Site" ? "already here!" : "Go to Site";
  event.preventDefault();
};
