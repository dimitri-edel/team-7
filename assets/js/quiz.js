// Initialize variables
let quizData = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let allReasonings = [];

// Fetch quiz data from JSON file
async function fetchQuizData() {
  const response = await fetch('quiz_data.json');
  const data = await response.json();
  quizData = data; // Directly assign the array of objects
  displayQuestion(); // Display the first question
}

// Display the current question and options
function displayQuestion() {
  const question = quizData[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-button');
  const reasoningContainer = document.getElementById('reasoning-container');
  const reasoningElement = document.getElementById('reasoning');

  questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
  optionsContainer.innerHTML = ''; // Clear previous options
  reasoningContainer.style.display = 'none'; // Hide reasoning initially

  // Create option buttons
  question.options.forEach((option) => {
    const optionButton = document.createElement('button');
    optionButton.textContent = option.answer;
    optionButton.classList.add('btn', 'btn-outline-primary', 'btn-lg', 'mb-2', 'w-100');
    optionButton.onclick = function() {
      selectedAnswers[currentQuestionIndex] = option.answer;
      allReasonings[currentQuestionIndex] = { answer: option.answer, reasoning: option.reasoning };
      reasoningElement.textContent = option.reasoning;
      reasoningContainer.style.display = 'block';
      nextButton.style.display = 'inline-block';
    };
    optionsContainer.appendChild(optionButton); // Add option button to container
  });
}

// Show results after the quiz
function showResults() {
  const resultContainer = document.getElementById('result-container');
  const allReasoningsContainer = document.getElementById('all-reasonings');
  
  let reasoningsHtml = '';
  allReasonings.forEach((item, index) => {
    reasoningsHtml += `
      <div class="mb-3">
        <h5><strong>Question ${index + 1}:</strong></h5>
        <p><strong>Your answer:</strong> ${item.answer}</p>
        <p><strong>Reasoning:</strong> ${item.reasoning}</p>
      </div>
    `;
  });
  
  allReasoningsContainer.innerHTML = reasoningsHtml;
  resultContainer.style.display = 'block'; // Show results
  document.getElementById('question-container').style.display = 'none'; // Hide question container
}

// Handle next button click
document.getElementById('next-button').onclick = function() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 15) {
    displayQuestion(); // Display next question
    this.style.display = 'none'; // Hide next button
  } else {
    showResults(); // Show results at the end
  }
};

// Fetch quiz data when page loads
fetchQuizData();
