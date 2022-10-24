const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".display");

// screen.placeholder = "Type name here..";

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clean") {
      screen.innerText = "";
    } else if (item.id == "back") {
      let convert = screen.innerText.toString();
      screen.innerText = convert.substr(0, convert.length - 1);
    } else if (screen.innerText != "" && item.id == "equals") {
      screen.innerText = eval(screen.innerText);
    } else if (screen.innerText == "" && item.id == "equals") {
      screen.innerText = "";
      setTimeout(() => (screen.innerText = ""), 2000);
    } else {
      screen.innerText += item.id;
    }
  };
});
