function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// When the user scrolls the page, execute myFunction
window.onload = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

//CHECK FOR WIDE ELEMENTS
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});

var romanToInt = function (str) {
  let result = 0;
  let roman = {
    I: 1,
    V: 5,
  };

  for (let i = 0; i < str.length; i++) {
    let current = roman[str[i]];
    let next = roman[str[i + 1]];

    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  console.log(result);
};

console.log(romanToInt("IIV"));
