const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");
const scoreValueElement = document.getElementById("score-value");

let score = 0;
let currentQuestionIndex = 0;

const questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
    answer: 2
  },
  {
    question: "Qual é a cor do céu?",
    options: ["Verde", "Amarelo", "Azul", "Vermelho"],
    answer: 2
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    answer: 0
  }
];

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = "";

  for (let i = 0; i < question.options.length; i++) {
    const option = document.createElement("div");
    option.classList.add("option");
    option.textContent = question.options[i];
    option.addEventListener("click", selectOption);
    optionsElement.appendChild(option);
  }
}

function selectOption(event) {
  const selectedOption = event.target;
  const question = questions[currentQuestionIndex];

  if (question.answer === question.options.indexOf(selectedOption.textContent)) {
    score++;
    resultElement.textContent = "Resposta correta!";
  } else {
    resultElement.textContent = "Resposta incorreta!";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionElement.textContent = "Quiz finalizado!";
  optionsElement.innerHTML = "";
  submitButton.disabled = true;
  resultElement.textContent = "";
  scoreValueElement.textContent = score;
}

submitButton.addEventListener("click", () => {
  resultElement.textContent = "";
  selectOption(null);
});

showQuestion();
