import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;

const todoInput = document.getElementsByName("task")[0] as HTMLInputElement;
console.log(todoInput);
const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: Date.now().toString(),
  };
  todos.push(todo);
  todoInput.value = "" as unknown as string;
  renderTodos(todos);
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  //Creating a checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find((item) => {
      if (item.id === id) item.isCompleted = checkBox.checked;
    });
    titleH3.className = checkBox.checked ? "textcut" : "";
  };

  //creating h3 for title
  const titleH3: HTMLHeadingElement = document.createElement("h3");
  titleH3.textContent = title;
  titleH3.className = checkBox.checked ? "textcut" : "";

  //Creating Delete button
  const deleteBtn: HTMLButtonElement = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.className = "deleteBtn";
  // deleteBtn.onclick = (event: MouseEvent) => {
  //   const clickedButton = event.target as HTMLButtonElement; // Type assertion
  //   clickedButton.parentElement?.remove();
  // };
  deleteBtn.onclick = () => {
    deleteTodo(id);
  };

  //Appending all to todoItem
  todo.append(titleH3, checkBox, deleteBtn);
  todosContainer.append(todo);
};

const deleteTodo = (id: string) => {
  const idx = todos.findIndex((item) => item.id === id);
  todos.splice(idx, 1);
  renderTodos(todos);
};

const renderTodos = (todos: Todo[]) => {
  todosContainer.innerHTML = "";
  todos.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  });
};
