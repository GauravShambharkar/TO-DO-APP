const input = document.querySelector("input");
const add = document.querySelector("button");
add.style.color = "white";

const Clear = document.querySelector("#Clear");
Clear.style.color = "white";

const todo = document.querySelector(".todo");

let ctr = 1;


add.addEventListener("click", () => {

  if (input.value == "") {
    alert("input feild is empty");
    return;
  }

  console.log("running");
  let div = document.createElement("div");
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.gap = "10px";
  div.style.margin = "15px 0px 0px 0px";
  div.setAttribute("id", "todo-" + ctr);
  ctr++;
  todo.appendChild(div);

  let h5 = document.createElement("h5");
  h5.textContent = input.value;
  div.appendChild(h5);

  input.value = "";

  let DeleteBtn = document.createElement("button");
  DeleteBtn.textContent = "Delete";
  DeleteBtn.style.padding = "4px";
  DeleteBtn.style.borderRadius = "10px";
  DeleteBtn.style.color = "black";

  div.appendChild(DeleteBtn);

  let update = document.createElement("button");
  update.textContent = "Update";
  update.style.padding = "4px";
  update.style.borderRadius = "10px";
  update.style.color = "black";
  div.appendChild(update);

  DeleteBtn.addEventListener("click", () => {
    todo.removeChild(div);
  });

  update.addEventListener("click", () => {
    input.value = h5.textContent;
    add.addEventListener("click", () => {
      todo.removeChild(div);
      div = input.value;
    });
  });
});

Clear.addEventListener("click", () => {
  input.value = "";
});
