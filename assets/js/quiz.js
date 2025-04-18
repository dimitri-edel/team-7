// Initialize variables
let quizData = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let allReasonings = [];
let score = 0;
let lastClickedButton = null;

// Fetch quiz data from JSON file
async function fetchQuizData() {
  const response = await fetch("quiz_data.json");
  const data = await response.json();
  quizData = data; // Directly assign the array of objects

  // Randomize the quiz data
  shuffleArray(quizData);

  displayQuestion(); // Display the first question
}

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// Display the current question and options
function displayQuestion() {
  if (currentQuestionIndex >= 15) {
    showResults(); // Show the results if 15 questions have been displayed
    return;
  }

  const question = quizData[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");
  const reasoningContainer = document.getElementById("reasoning-container");
  const reasoningElement = document.getElementById("reasoning");

  questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${
    question.question
  }`;
  optionsContainer.innerHTML = ""; // Clear previous options
  reasoningContainer.style.display = "none"; // Hide reasoning initially

  // Create option buttons
  question.answers.forEach((answer, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = answer;
    optionButton.classList.add(
      "btn",
      "btn-outline-secondary",
      "btn-lg",
      "mb-2",
      "w-100"
    );

    optionButton.onclick = function () {
      // Store the selected answer
      selectedAnswers[currentQuestionIndex] = answer;

      // Enable the submit button when an answer is selected
      submitButton.disabled = false;

      // If there's a previously clicked button, reset it
      if (lastClickedButton && lastClickedButton !== optionButton) {
        lastClickedButton.classList.remove("clicked");
      }

      // Highlight the selected option with darker grey and white text
      optionButton.classList.add("clicked"); // Add the 'clicked' class when the button is clicked

      // Update lastClickedButton to the current one
      lastClickedButton = optionButton;
    };
    optionsContainer.appendChild(optionButton); // Add option button to container
  });

  // Initially disable the submit button until an option is clicked
  submitButton.disabled = true;

  // Show submit button after an answer is clicked
  submitButton.style.display = "inline-block";
  submitButton.onclick = function () {
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
    const correctAnswerIndex = question.correct;
    const answerButtons = optionsContainer.querySelectorAll("button");

    // Disable all option buttons after submitting the answer
    answerButtons.forEach((button) => {
      button.disabled = true; // Disable the button to prevent further clicks
    });

    // Check if the selected answer is correct
    answerButtons.forEach((button, index) => {
      // Remove any previous color classes
      button.classList.remove(
        "btn-primary",
        "btn-success",
        "btn-danger",
        "btn-secondary",
        "clicked"
      );

      // Apply correct and incorrect background color (green for correct, red for wrong)
      if (index === correctAnswerIndex) {
        button.classList.add("btn-success"); // Green for correct answer
      } else if (button.textContent === selectedAnswer) {
        button.classList.add("btn-danger"); // Red for incorrect selected answer
      } else {
        button.classList.add("btn-secondary"); // Neutral for unselected options
      }
    });

    const selectedAnswerIndex = question.answers.indexOf(selectedAnswer);
    reasoningElement.textContent = question.reasons[selectedAnswerIndex];
    reasoningContainer.style.display = "block";

    // Update score if correct answer
    if (selectedAnswer === question.answers[correctAnswerIndex]) {
      score++;
    }

    // Store selected answer and reasoning for results display
    allReasonings[currentQuestionIndex] = {
      answer: selectedAnswer,
      reasoning: question.reasons[selectedAnswerIndex],
      correct: selectedAnswer === question.answers[correctAnswerIndex]
    };

    // Show next button after submission
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none"; // Hide submit button after submission
  };
}

// Show results after the quiz
function showResults() {
  const resultContainer = document.getElementById("result-container");
  const allReasoningsContainer = document.getElementById("all-reasonings");

  let reasoningsHtml = "";
  allReasonings.forEach((item, index) => {
    reasoningsHtml += `
      <div class="mb-3">
        <h5><strong>Question ${index + 1}:</strong></h5>
        <p><strong>Your answer:</strong> ${item.answer}</p>
        <p><strong>Reasoning:</strong> ${item.reasoning}</p>
        <p><strong>Correct answer:</strong> ${
          quizData[index].answers[quizData[index].correct]
        }</p>
      </div>
    `;
  });

  // Display the total score
  const scoreHtml = `<h4>Your score: ${score} / 15</h4>`;
  allReasoningsContainer.innerHTML = scoreHtml + reasoningsHtml;
  resultContainer.style.display = "block"; // Show results
  document.getElementById("question-container").style.display = "none"; // Hide question container
}

// Handle next button click
document.getElementById("next-button").onclick = function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < 15) {
    displayQuestion(); // Display next question
    this.style.display = "none"; // Hide next button
  } else {
    showResults(); // Show results at the end
  }
};

// Fetch quiz data when page loads
fetchQuizData();
