"use strict";

const changeText = (event) => {
  const link = document.getElementById("thisWebsiteProd");
  link.text = link.text === "Live" ? "You're here" : "Live";
  event.preventDefault();
};
