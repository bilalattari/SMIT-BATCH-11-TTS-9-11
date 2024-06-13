function sum(a, b) {
  return a + b;
}

// const sum1 = (a, b) => a + b;

const isEven = (num) => num % 2 === 0;

let number = [1, 23, 42, 1244, 213, 43, 265, 3, 2, 3215, 322, 254, 32, 11];

let evenNumbers = number.filter((data) => isEven(data));
let oddNumbers = number.filter((data) => !isEven(data));

// console.log("evenNumbers=>", evenNumbers);
// console.log("oddNumbers=>", oddNumbers);
// let evenNumbers = [];

// number.forEach((data, ind) => {
//   if (isEven(data)) {
//     evenNumbers.push(data);
//   }
// });

let todoList = document.getElementById("todo_list");
let search_input = document.getElementById("search_input");
let priority_dropdown = document.getElementById("priority");

var todos = [
  {
    task: "Buy groceries",
    category: "Personal",
    priority: "High",
  },
  {
    task: "Prepare presentation for Monday meeting",
    category: "Work",
    priority: "High",
  },
  {
    task: "Clean the house",
    category: "Personal",
    priority: "Medium",
  },
  {
    task: "Finish project report",
    category: "Work",
    priority: "High",
  },
  {
    task: "Schedule dentist appointment",
    category: "Health",
    priority: "Medium",
  },
  {
    task: "Go for a run",
    category: "Health",
    priority: "Low",
  },
  {
    task: "Call mom",
    category: "Personal",
    priority: "High",
  },
  {
    task: "Plan weekend trip",
    category: "Personal",
    priority: "Low",
  },
  {
    task: "Attend yoga class",
    category: "Health",
    priority: "Medium",
  },
  {
    task: "Complete online course",
    category: "Learning",
    priority: "High",
  },
  {
    task: "Read a book",
    category: "Personal",
    priority: "Low",
  },
  {
    task: "Update LinkedIn profile",
    category: "Work",
    priority: "Medium",
  },
  {
    task: "Water the plants",
    category: "Personal",
    priority: "Low",
  },
  {
    task: "Prepare for job interview",
    category: "Work",
    priority: "High",
  },
  {
    task: "Meditate for 15 minutes",
    category: "Health",
    priority: "Low",
  },
  {
    task: "Complete homework assignment",
    category: "Learning",
    priority: "High",
  },
  {
    task: "Watch educational video",
    category: "Learning",
    priority: "Medium",
  },
  {
    task: "Organize workspace",
    category: "Work",
    priority: "Medium",
  },
  {
    task: "Research new investment opportunities",
    category: "Learning",
    priority: "Medium",
  },
  {
    task: "Cook a healthy meal",
    category: "Health",
    priority: "Medium",
  },
];

function createElement(todo, category, priority) {
  var ele = `<div class="border rounded-md p-3 m-2">
            <h1 class="font-bold text-2xl">${todo}</h1>
            <h3 class="font-medium text-lg">${category}</h3>
            <h3 class="${
              priority === "High"
                ? `bg-red-600`
                : priority === "Medium"
                ? "bg-green-600"
                : "bg-blue-600"
            } inline-block py-1 px-3 my-3 text-white rounded-md">${priority}</h3>
        </div>`;
  return ele;
}

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((data, ind) => {
    var todoItem = createElement(data.task, data.category, data.priority);
    todoList.innerHTML += todoItem;
  });
}
renderTodos();

search_input.addEventListener("change", function () {
  //search from task
  let searchFilter = todos.filter((data) =>
    data.task.toLowerCase().includes(this.value.toLowerCase())
  );

  // run for each on the array return from filter
  todoList.innerHTML = "";
  searchFilter.forEach((data, ind) => {
    var todoItem = createElement(data.task, data.category, data.priority);
    todoList.innerHTML += todoItem;
  });
});

priority_dropdown.addEventListener("change", function () {
  let priorityFiltered = todos.filter((data) => data.priority == this.value);

  // run for each on the array return from filter
  todoList.innerHTML = "";
  priorityFiltered.forEach((data, ind) => {
    var todoItem = createElement(data.task, data.category, data.priority);
    todoList.innerHTML += todoItem;
  });
});
