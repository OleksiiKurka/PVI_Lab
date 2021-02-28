var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var modal = document.getElementById("openModal");
let temp = document.querySelectorAll(".card-input");
let itemsFromForm = document.getElementById("myForm").elements;

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}
function showModal() {
  var x = document.getElementById("openModal");
  if (!x.classList.contains("seen")) {
    x.classList.add("seen");
      modal.style.setProperty("pointer-events", "auto");
  }
}
function closeModal() {
  var x = document.getElementById("openModal");
  if (x.classList.contains("seen")) {
    modal.style.setProperty("pointer-events", "none");
    x.classList.remove("seen");
  } 
} 

function submitVal(ev) {
  let IsValid = [];
  let fff = [];
  temp.forEach((x) => IsValid.push(x.checkValidity()));
  temp.forEach((x) => fff.push(x.value));
  console.log(fff);
  if (IsValid.indexOf(false) >= 0) {
    console.log("error wrong input");
    return false;
  } else console.log("correct input");
  let radioButton = document.getElementsByName("radio");

  const result = JSON.stringify({
    name: temp[0].value,
    email: temp[1].value,
    password: temp[2].value,
    difficulty: temp[4].value,
    about: temp[5].value,
    sex: radioButton[0].checked ? radioButton[0].value : radioButton[1].value,
  });

  console.log(result);
  closeModal();
}

function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  if (ev.target.tagName == "IMG") {
    return;
  }
  var data = ev.dataTransfer.getData("text");

  ev.target.appendChild(document.getElementById(data));
}

(function () {
  let items = document.querySelectorAll(".cell-white,.cell-black");
  items.forEach(function (item) {
    item.addEventListener("dragover", allowDrop, false);
    item.addEventListener("drop", drop, false);
  });
  let itemImg = document.querySelectorAll("td img");
  itemImg.forEach(function (item1) {
    item1.addEventListener("dragstart", drag, false);
    item1.setAttribute("draggable", "true");
  });
})();

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
