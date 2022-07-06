var form = document.getElementById("newtask-form");
var modal = document.getElementById("modal");

function openForm() {
  form.style.display = "flex";
  form.style.flexDirection = "column"  
  modal.style.display = "block";
}

function hidePopup() {
  form.style.display = "none";
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}