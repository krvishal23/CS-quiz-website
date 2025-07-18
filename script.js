const quizData = [
  {
    question: "1.What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markdown Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "2.Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "3.Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: "Django"
  },
  {
    question: "4.Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    answer: "PHP"
  },
  {
    question: "5.Where can the data be updated?",
    options: ["Informational environment", "Data warehouse environment", "Operational environment", "Data mining environment"],
    answer: "Operational environment"
  },
  {
    question: "6.The total view of a database is known as?",
    options: ["Physical view", "Internal view", "Conceptul view", "All"],
    answer: "Conceptual view"
  },
  {
    question: "7.Total bits used by th IPv6 address is?",
    options: ["64 bit", "256 bit", "128 bit", "32 bit"],
    answer: "128 bit"
  },
  {
    question: "8.What are modern computers based on?",
    options: ["Microchip", "MIcroprocessor", "I/O devices", "both a and b"],
    answer: "both a and b"
  },
  {
    question: "9.Where is computer firmware present?",
    options: ["Cache memory", "non-volatile memory", "Volatile memory", "RAM"],
    answer: "non-volatile memory"
  },
  {
    question: "10.Why is a firewall used in a computer?",
    options: ["Monitering", "data transmission", "Authentication", "security"],
    answer: "security"
  }

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultBox = document.getElementById('result');
const scoreEl = document.getElementById('score');

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const div = document.createElement('div');
    div.classList.add('option');
    div.textContent = option;
    div.addEventListener('click', () => {
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      div.classList.add('selected');
    });
    optionsEl.appendChild(div);
  });
}

nextBtn.addEventListener('click', () => {
  const selected = document.querySelector('.option.selected');
  if (!selected) {
    alert("Please select an option!");
    return;
  }

  const userAnswer = selected.textContent;
  if (userAnswer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById('quiz-box').classList.add('hidden');
  resultBox.classList.remove('hidden');
  scoreEl.textContent = `${score} / ${quizData.length}`;
}

// Initialize the first question
loadQuestion();
