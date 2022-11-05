const quizData = [
  {
    question:
      "	In which year of First World War Germany declared war on Russia and France?",
    a: "1914",
    b: "1915",
    c: "1916",
    d: "1917",
    correct: "a",
  },
  {
    question: "In a normal human body, the total number of red blood cells is",
    a: "15 trillion",
    b: "20 trillion",
    c: "25 trillion",
    d: "30 trillion",
    correct: "d",
  },
  {
    question: "In which season do we need more fat?",
    a: "Rainy season",
    b: "Spring",
    c: "Winter",
    d: "Summer",
    correct: "c",
  },
  {
    question:
      "How many times has Brazil won the World Cup Football Championship?",
    a: "Four times",
    b: "Twice",
    c: "Five times",
    d: "Once",
    correct: "c",
  },
];

// define document elements
const quiz = document.getElementById("quiz");
const answerLi = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

const LoadQuizDataAndStart = () => {
  if (currentQuiz < quizData.length) {
    const currentQuizInfo = quizData[currentQuiz];
    question.innerText = currentQuizInfo.question;
    a_text.innerText = currentQuizInfo.a;
    b_text.innerText = currentQuizInfo.b;
    c_text.innerText = currentQuizInfo.c;
    d_text.innerText = currentQuizInfo.d;
  } else {
    quiz.innerHTML = `
    <h3 class='score_text'>you have answered ${score}/${quizData.length} questions </h3>
    <button class='btn_restart' onClick='location.reload()' >Restart</button>
    `;
  }
};

const getCheckedAnswer = () => {
  let answer = undefined;
  answerLi.forEach((ele) => {
    if (ele.checked) {
      answer = ele.id;
    }
  });
  return answer;
};

const deselectAnswer = () => {
  answerLi.forEach((ele) => {
    ele.checked = false;
  });
};

btn.addEventListener("click", () => {
  const answer = getCheckedAnswer();
  if (!answer) {
    alert("you should select an answer first !");
    return;
  }
  if (answer == quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;
  deselectAnswer();
  LoadQuizDataAndStart();
});

LoadQuizDataAndStart();
