interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string; // Index of the correct answer in the options array
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the correct way to define a variable in TypeScript?",
    options: [
      "var variableName: type",
      "let variableName: type",
      "const variableName: type",
      "All of the above",
    ],
    correctAnswer: "const variableName: type", // "All of the above" is the correct answer
  },
  {
    question: "Which type is not a valid TypeScript type?",
    options: ["string", "number", "object", "element"],
    correctAnswer: "object", // "element" is not a valid TypeScript type
  },
  {
    question: "How do you define an interface in TypeScript?",
    options: [
      "interface InterfaceName {}",
      "class InterfaceName {}",
      "type InterfaceName = {}",
      "None of the above",
    ],
    correctAnswer: "interface InterfaceName {}", // "interface InterfaceName {}" is the correct answer
  },
  {
    question: "How do you specify an optional property in an interface?",
    options: [
      "propertyName?: type",
      "propertyName: type?",
      "propertyName! : type",
      "propertyName: type!",
    ],
    correctAnswer: "propertyName?: type", // "propertyName?: type" is the correct answer
  },
  {
    question:
      "Which of the following is used to define a constant in TypeScript?",
    options: ["let", "var", "const", "static"],
    correctAnswer: "var", // "const" is the correct answer
  },
];

const question_ele = document.querySelector("#question") as HTMLHeadingElement;
const radioInputContainer = document.querySelector(
  "#radio-inputs-container"
) as HTMLDivElement;
const nextBtn = document.querySelector("#next_btn") as HTMLButtonElement;
const quiz_container = document.querySelector(
  "#quiz_container"
) as HTMLDivElement;
const result_container = document.querySelector(
  "#result_container"
) as HTMLDivElement;

let currentInd: number = 0;
let rightAnswers: number = 0;
let wrongAnswers: number = 0;

renderQuizToHTML();

function renderQuizToHTML() {
  radioInputContainer.innerHTML = "";
  if (currentInd === quizQuestions.length) {
    quiz_container.style.display = "none";
    result_container.style.display = "block";
    result_container.innerHTML += `<h1 class = "text-2xl">${
      rightAnswers > wrongAnswers ? "You Win" : "You Loss"
    }</h1>`;
    result_container.innerHTML += `<h1 class = "text-2xl">Right Answer ${rightAnswers}</h1>`;
    result_container.innerHTML += `<h1 class = "text-2xl">Wrong Answer ${wrongAnswers}</h1>`;
  } else {
    const que = quizQuestions[currentInd];
    question_ele.innerText = `${currentInd + 1}) ${que.question}`;
    const allOptions = que.options.forEach(
      (data, index) =>
        (radioInputContainer.innerHTML += `<label class="my-2">
        <input type="radio" name=${`question-${currentInd}`} value="${data.toString()}" />
        <span class="pl-2">${data}</span>
      </label>`)
    );
  }

  if (currentInd === quizQuestions.length - 1) {
    nextBtn.innerText = "Submit";
  }
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector(
    `input[name = "question-${currentInd}"]:checked`
  ) as HTMLInputElement;
  console.log("selected=>", selected);
  if (selected) {
    if (selected.value == quizQuestions[currentInd].correctAnswer) {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }
    currentInd++;
    renderQuizToHTML();
  }
});
