"use strict";

const changeText = (event) => {
  const link = document.getElementById("thisWebsiteProd");
  link.text = link.text === "Prod" ? "You're here" : "Prod";
  event.preventDefault();
};
