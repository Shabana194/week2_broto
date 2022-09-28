function name() {
  document.getElementById("Button").onmouseover = function () {
    this.style.backgroundColor = "#fff";
  };
  document.getElementById("Button").onmouseout = function () {
    this.style.backgroundColor = "black";
  };
}
