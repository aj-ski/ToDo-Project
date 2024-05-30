var submit = document.getElementById("submit");
var clear = document.getElementById("clear");
var text = document.getElementById("txtInput");
var tasks = document.getElementById("tasks");

text.addEventListener("keypress", pressedKey => {
  if (pressedKey.key === "Enter") {
      submit.click();
  }
})
submit.addEventListener("click", addTask);
clear.addEventListener("click", () => {
  tasks.innerHTML = "";
});
tasks.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
})

function addTask() {
  if (text.value == "") {
    return 0;
  }
  var li = document.createElement("li");
  li.innerHTML = text.value;
  tasks.appendChild(li);
  text.value = "";
  text.focus();
}

