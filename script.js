"use strict";

const changeText = (event) => {
  const link = document.getElementById("thisWebsiteProd");
  link.text = link.text === "Go to Site" ? "You're Here" : "Go to Site";
  event.preventDefault();
};
