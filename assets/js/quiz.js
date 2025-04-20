document.addEventListener('DOMContentLoaded', function () {
  // Initialize variables
  let quizData = [];
  let currentQuestionIndex = 0;
  let selectedAnswers = [];
  let allReasonings = [];
  let score = 0;
  let lastClickedButton = null;
  let username = '';

  // Function to save the score to localStorage (scoreboard)
  function saveScoreBoardData(playerData) {
    let currentData = localStorage.getItem('debug-your-doubts');
    if (currentData === null) {
      currentData = [];
    } else {
      currentData = JSON.parse(currentData);
    }
    currentData.push(playerData); // Add the current player data to the existing data
    localStorage.setItem('debug-your-doubts', JSON.stringify(currentData)); // Save back to localStorage
  }

  // Fetch quiz data from JSON file
  async function fetchQuizData() {
    const response = await fetch("quiz_data.json");
    const data = await response.json();
    quizData = data;
    shuffleArray(quizData); // Randomize quiz questions
    displayQuestion(); // Start displaying the first question after data is fetched
  }

  // Function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  // Handle start button click
  document.getElementById("start-quiz-btn").onclick = function () {
    const inputUsername = document.getElementById("username-input").value;
    if (inputUsername.trim() !== "") {
      username = inputUsername; // Store the username
      document.getElementById("username-section").style.display = "none"; // Hide username section
      document.getElementById("quiz-section").style.display = "block"; // Show quiz section
      fetchQuizData(); // Fetch and start the quiz once the username is entered
    } else {
      alert("Please enter a username to start the quiz.");
    }
  };

  // Display the current question and options
  function displayQuestion() {
    if (currentQuestionIndex >= quizData.length) {  // Check the total number of questions dynamically
      showResults(); // Show the results when all questions have been displayed
      return;
    }

    const question = quizData[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-button");
    const submitButton = document.getElementById("submit-button");
    const reasoningContainer = document.getElementById("reasoning-container");
    const reasoningElement = document.getElementById("reasoning");

    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
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
        submitButton.disabled = false; // Enable submit button when answer is selected
        if (lastClickedButton && lastClickedButton !== optionButton) {
          lastClickedButton.classList.remove("clicked");
        }
        optionButton.classList.add("clicked");
        lastClickedButton = optionButton; // Update lastClickedButton
      };
      optionsContainer.appendChild(optionButton);
    });

    submitButton.disabled = true;
    submitButton.style.display = "inline-block";
    submitButton.onclick = function () {
      const selectedAnswer = selectedAnswers[currentQuestionIndex];
      const correctAnswerIndex = question.correct;
      const answerButtons = optionsContainer.querySelectorAll("button");

      // Disable all option buttons after submitting the answer
      answerButtons.forEach((button) => {
        button.disabled = true;
      });

      answerButtons.forEach((button, index) => {
        button.classList.remove(
          "btn-primary", "btn-success", "btn-danger", "btn-secondary", "clicked"
        );
        if (index === correctAnswerIndex) {
          button.classList.add("btn-success");
        } else if (button.textContent === selectedAnswer) {
          button.classList.add("btn-danger");
        } else {
          button.classList.add("btn-secondary");
        }
      });

      const selectedAnswerIndex = question.answers.indexOf(selectedAnswer);
      reasoningElement.textContent = question.reasons[selectedAnswerIndex];
      reasoningContainer.style.display = "block";

      if (selectedAnswer === question.answers[correctAnswerIndex]) {
        score++;
      }

      allReasonings[currentQuestionIndex] = {
        answer: selectedAnswer,
        reasoning: question.reasons[selectedAnswerIndex],
        correct: selectedAnswer === question.answers[correctAnswerIndex]
      };

      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    };
  }

  function showResults() {
    const resultContainer = document.getElementById("result-container");
    const allReasoningsContainer = document.getElementById("all-reasonings");
    const reasoningContainer = document.getElementById("reasoning-container");

    reasoningContainer.style.display = "none";

    let reasoningsHtml = "";
    allReasonings.forEach((item, index) => {
      reasoningsHtml += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div class="carousel-item-content">
            <h5><strong>Question ${index + 1}:</strong></h5>
            <p><strong>Your answer:</strong> ${item.answer}</p>
            <p><strong>Reasoning:</strong> ${item.reasoning}</p>
            <p><strong>Correct answer:</strong> ${
              quizData[index].answers[quizData[index].correct]
            }</p>
          </div>
        </div>
      `;
    });

    allReasoningsContainer.innerHTML = reasoningsHtml;

    resultContainer.style.display = "block";
    document.getElementById("question-container").style.display = "none";

    const scoreHtml = `<h4 class="score">Your score: ${score} / 15</h4>`;
    allReasoningsContainer.innerHTML = scoreHtml + reasoningsHtml;

    // Save the score to the scoreboard (localStorage)
    saveScoreBoardData({
      name: username, // Retrieve username from global variable
      score: score,
    });

    // Show the results and add a button to view the scoreboard
    document.getElementById("view-highscore-btn").style.display = "block";
  }

  // Handle next button click
  document.getElementById("next-button").onclick = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < 15) {
      displayQuestion();
      this.style.display = "none";
    } else {
      showResults();
    }
  };

  // Fetch quiz data and display the first question
  fetchQuizData();

  // Quotes array
  const quotes = [
    { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { text: "I can be changed by what happens to me. But I refuse to be reduced by it.", author: "Maya Angelou" },
    { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
    // Add other quotes here...
  ];

  // Display a random quote
  function displayQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-text").textContent = `"${randomQuote.text}"`;
    document.getElementById("quote-author").textContent = `- ${randomQuote.author}`;
  }

  // Set interval for quotes to change every 10 seconds
  setInterval(displayQuote, 10000);
  displayQuote(); // Call immediately on page load
});
