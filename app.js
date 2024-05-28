var assignmentsArray = [
  {
    title: "Finance Tracking Application",
    code: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
    link: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
    date: "24-May-2024",
    description: "Manage Income , Expense and see history using our app.",
  },
  {
    title: "Text Editor",
    code: "https://664b8a5732b097c5cc6fa07a--monumental-dolphin-5fe9df.netlify.app/?authuser=0",
    link: "https://664b8a5732b097c5cc6fa07a--monumental-dolphin-5fe9df.netlify.app/?authuser=0",
    date: "18-May-2024",
    description:
      "Learned making text bold , italice , changing font family using JS Dome",
  },
  {
    title: "Todo List",
    description: "Made Add, update , delete todo using JS Dom",
    code: "https://m-mahad-siddiqui.github.io/Javascript-JS/TO-DO-APP/index.html",
    link: "https://m-mahad-siddiqui.github.io/Javascript-JS/TO-DO-APP/index.html",
    date: "20-May-2024",
  },
  {
    title: "Finance Tracking Application",
    code: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
    link: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
    date: "24-May-2024",
    description: "Manage Income , Expense and see history using our app.",
  },
  {
    title: "Text Editor",
    code: "https://664b8a5732b097c5cc6fa07a--monumental-dolphin-5fe9df.netlify.app/?authuser=0",
    link: "https://664b8a5732b097c5cc6fa07a--monumental-dolphin-5fe9df.netlify.app/?authuser=0",
    date: "18-May-2024",
    description:
      "Learned making text bold , italice , changing font family using JS Dome",
  },
  {
    title: "Todo List",
    description: "Made Add, update , delete todo using JS Dom",
    code: "https://m-mahad-siddiqui.github.io/Javascript-JS/TO-DO-APP/index.html",
    link: "https://m-mahad-siddiqui.github.io/Javascript-JS/TO-DO-APP/index.html",
    date: "20-May-2024",
  },
];

var assignList = document.getElementById("all-assignments");

for (var i = 0; i < assignmentsArray.length; i++) {
  var div = ` <div class="p-4 md:w-1/3">
  <div
    class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
  >
    <div class="p-6">
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
       ${assignmentsArray[i].title} 
      </h1>
      <p class="leading-relaxed mb-3">${assignmentsArray[i].description}</p>
      <div class="flex items-center flex-wrap">
        <a
          href="${assignmentsArray[i].link}"
          class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >See Preview
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <span
          class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
        >
          <a
            href="${assignmentsArray[i].code}"
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
              ></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </a>
          1.2K
        </span>
      </div>
    </div>
  </div>
</div>`;

  assignList.innerHTML += div;
}

var projectInfo = {
  title: "Finance Tracking Application",
  code: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
  link: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
  date: "24-May-2024",
  description: "Manage Income , Expense and see history using our app.",
};

console.log(projectInfo.title);
console.log(assignmentsArray[0].title);
