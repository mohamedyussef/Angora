let nav = document.getElementById("navba");
let li1 = document.getElementById("c1");
let li2 = document.getElementById("c2");
let li3 = document.getElementById("c3");
let li4 = document.getElementById("c4");
let li5 = document.getElementById("c5");
let li6 = document.getElementById("c6");
let li7 = document.getElementById("c7");
let li8 = document.getElementById("c8");
li1.onmouseenter = function () {
  li1.style.setProperty("color", "brown", "important");
};
li1.onmouseleave = function () {
  if (scrollY == 0) {
    li1.style.setProperty("color", "white", "important");
  } else {
    li1.style.setProperty("color", "black", "important");
  }
};
li2.onmouseenter = function () {
  li2.style.setProperty("color", "brown", "important");
};
li2.onmouseleave = function () {
  if (scrollY == 0) {
    li2.style.setProperty("color", "white", "important");
  } else {
    li2.style.setProperty("color", "black", "important");
  }
};
li3.onmouseenter = function () {
  li3.style.setProperty("color", "brown", "important");
};
li3.onmouseleave = function () {
  if (scrollY == 0) {
    li3.style.setProperty("color", "white", "important");
  } else {
    li3.style.setProperty("color", "black", "important");
  }
};
li4.onmouseenter = function () {
  li4.style.setProperty("color", "brown", "important");
};
li4.onmouseleave = function () {
  if (scrollY == 0) {
    li4.style.setProperty("color", "white", "important");
  } else {
    li4.style.setProperty("color", "black", "important");
  }
};
li5.onmouseenter = function () {
  li5.style.setProperty("color", "brown", "important");
};
li5.onmouseleave = function () {
  if (scrollY == 0) {
    li5.style.setProperty("color", "white", "important");
  } else {
    li5.style.setProperty("color", "black", "important");
  }
};
li6.onmouseenter = function () {
  li6.style.setProperty("color", "brown", "important");
};
li6.onmouseleave = function () {
  if (scrollY == 0) {
    li6.style.setProperty("color", "white", "important");
  } else {
    li6.style.setProperty("color", "black", "important");
  }
};
li7.onmouseenter = function () {
  li7.style.setProperty("color", "brown", "important");
};
li7.onmouseleave = function () {
  if (scrollY == 0) {
    li7.style.setProperty("color", "white", "important");
  } else {
    li7.style.setProperty("color", "black", "important");
  }
};
li8.onmouseenter = function () {
  li8.style.setProperty("color", "brown", "important");
};
li8.onmouseleave = function () {
  if (scrollY == 0) {
    li8.style.setProperty("color", "white", "important");
  } else {
    li8.style.setProperty("color", "black", "important");
  }
};
window.onscroll = function () {
  if (scrollY == 0) {
    nav.style.background = "transparent";
    li1.style.setProperty("color", "white", "important");
    li2.style.setProperty("color", "white", "important");
    li3.style.setProperty("color", "white", "important");
    li4.style.setProperty("color", "white", "important");
    li5.style.setProperty("color", "white", "important");
    li6.style.setProperty("color", "white", "important");
    li7.style.setProperty("color", "white", "important");
    li8.style.setProperty("color", "white", "important");
  } else {
    nav.style.background = "white";
    li1.style.setProperty("color", "black", "important");
    li2.style.setProperty("color", "black", "important");
    li3.style.setProperty("color", "black", "important");
    li4.style.setProperty("color", "black", "important");
    li5.style.setProperty("color", "black", "important");
    li6.style.setProperty("color", "black", "important");
    li7.style.setProperty("color", "black", "important");
    li8.style.setProperty("color", "black", "important");
  }
};
