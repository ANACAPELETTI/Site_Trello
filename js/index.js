function addCard(element) {
  const ulID = element.previousElementSibling.id;
  const text = prompt("Qual é a tarefa?");
  const board = document.getElementById(ulID);
  const template = `
  <li id="${new Date().getTime()}" draggable="true" ondragstart="drag(event)"">
    <p>${text}</p>
    <p class="remove" onclick="removeCard(this)">x</p>
  </li>
  `;
  board.innerHTML = board.innerHTML + template;
}

function removeCard(element) {
  document.getElementById(element.parentElement.id).remove();
}

function drag(event) {
  event.dataTransfer.setData("card", event.target.id);
}

function over(event) {
  event.preventDefault();
}

function drop(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  const data = event.dataTransfer.getData("card");
  const card = document.getElementById(data);
  target.appendChild(card);
  event.dataTransfer.clearData();
}
