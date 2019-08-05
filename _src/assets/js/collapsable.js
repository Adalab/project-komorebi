"use strict";

const collapsables = document.querySelectorAll(".js-collapsable");
const collapsableHeaders = document.querySelectorAll(".js-collapsable-header");

function handleCollapsables(ev) {
  const currentCollapsable = ev.currentTarget.parentElement;
  const currentStatus = currentCollapsable.classList.contains("open");

  for (const collapsable of collapsables) {
    collapsable.classList.remove("open");
  }

  //currentCollapsable.classList.toggle("open", !currentStatus);

  if (currentStatus === true) {
    currentCollapsable.classList.remove("open");
  } else {
    currentCollapsable.classList.add("open");
  }
}

for (let i = 0; i < collapsables.length; i++) {
  collapsableHeaders[i].addEventListener("click", handleCollapsables);
}
