localStorage.setItem("modmeId", "ustozshifu01");
localStorage.setItem("password", "946008948");

let inputs = document.getElementsByTagName("input");
let button = document.querySelector(".login");


button.onclick = function () {
  let id = inputs[0].value;
  let parol = inputs[1].value;

  let trueId = localStorage.getItem("modmeId");
  let trueParol = localStorage.getItem("password");

  if (id === trueId) {
    if (parol === trueParol) {
      alert("Bunday akkaunt bor ✅");
    } else {
      alert("Parol xato ❌");
    }
  } else {
    alert("Bunday akkaunt yo'q ❌");
  }
};