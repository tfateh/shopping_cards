
function sum() {
  let prix_Art = document.querySelectorAll(".prix_Art");
  let qota = document.querySelectorAll(".qota");
  

  let sum = 0;

  for (let i = 0; i < qota.length; i++) {
    sum=sum + qota[i].innerHTML * prix_Art[i].innerHTML;
  }
  document.getElementById("totals").innerHTML = "total pannier:  TND"+" " + sum;
}


let buttonsup = Array.from(document.getElementsByClassName("add"));



for (let btnup of buttonsup) {
  btnup.addEventListener("click", function () {
    btnup.nextElementSibling.innerHTML++;
    sum();
  });
}



let buttonsdown = Array.from(document.getElementsByClassName("minus"));

for (let btndown of buttonsdown) {
  btndown.addEventListener("click", function () {
    if (btndown.previousElementSibling.innerHTML > 0) {
      btndown.previousElementSibling.innerHTML--;
      sum();
    }
  });
}




let buttonsdelete = document.getElementsByClassName("fa-trash-alt");

for (let btndelete of buttonsdelete) {
  btndelete.addEventListener("click", function () {
    btndelete.parentNode.remove();
    sum();
  });
}


let hearts = document.querySelectorAll(".fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color === "red") {
      heart.style.color = "black";
    } else {
      heart.style.color = "red";
    }
  });
}