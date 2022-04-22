let userFormDOM = document.querySelector("#userForm");
let alertDOM = document.querySelector("#alert");

userFormDOM.addEventListener("submit", formHandler);

const alertFunction = (
  title,
  message,
  className = "warning"
) => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}!</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
`;

function formHandler(e) {
  e.preventDefault();
  let USER_NAME = document.querySelector("#username");
  let SCORE = document.querySelector("#score");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunction("Baslik Bilgisi", `Eksik bilgi girildi`);
  }
}

/*
<li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill">14</span>
</li> 
*/

let userListDOM = document.querySelector("#userList");

function addItem(userName, score) {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName}
  <span class="badge bg-primary rounded-pill">${score}</span>`;
  liDOM.classList.add(
    `list-group-item`,
    `d-flex`,
    `justify-content-between`,
    `align-items-center`
  );
  userListDOM.append(liDOM);
}
