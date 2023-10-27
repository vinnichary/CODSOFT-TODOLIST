const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");

function addTaskBtn() {
  if (inputTask.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    taskList.appendChild(li);
    let deleteBtn = document.createElement("deleteBtn");
    deleteBtn.innerHTML = "Delete";
    li.appendChild(deleteBtn);
  }
  inputTask.value = "";
  saveData();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "DELETEBTN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();