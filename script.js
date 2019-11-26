const tasks = [
  {
    id: 1,
    title: "Выучить JS",
    text: "Ходить на курс, делать домашки",
    completed: false
  },
  {
    id: 2,
    title: "Выучить React",
    text: "Ходить на курс, делать домашки читать документацию",
    completed: false
  }
];
(function(arrTasks) {
  const objectOfTasks = arrTasks.reduce((acc, task) => {
    acc[task.id] = task;
    return acc;
  }, {});
  function renderAllTasks(taskList) {
    Object.values(taskList).forEach(task => {
      const li = listItem(task);
      console.log(li);
    });
  }
  function listItem({ id, text, title }) {
    const li = document.createElement("li");
    li.classList.add("item");
    const h3 = document.createElement("h3");
    h3.classList.add("title");
    h3.textContent = title;

    const p = document.createElement("p");
    p.classList.add("article");
    p.textContent = text;

    const button = document.createElement("button");
    button.textContent = "Delete task";
    button.classList.add("btn");

    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(button);
    return li;
  }
  renderAllTasks(objectOfTasks);
})(tasks);
