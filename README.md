# Summit Nexus (Team 7)'s Debug your doubts

![HTML](https://img.shields.io/badge/Tech-HTML-orange)
![CSS](https://img.shields.io/badge/Tech-CSS-blue)
![JavaScript](https://img.shields.io/badge/Tech-JavaScript-yellow)
![Tests](https://img.shields.io/badge/Tests-Planned-brightgreen)

## Project Goal

This project aims to support software developers experiencing impostor syndrome by providing a safe and encouraging space to explore common professional scenarios. Through an interactive quiz, developers can learn to identify helpful and unhelpful thought patterns and reactions, ultimately fostering greater self-compassion and confidence.

## How It Works

The application presents users with various situations that software developers might encounter in their daily work. For each situation, users are given multiple response options.

* **Choosing the Best Answer:** Selecting the answer marked as the "correct" one earns the user score points and reinforces positive and constructive reactions.
* **Learning from Other Choices:** If a user selects an answer that isn't the best approach, they will receive:
    * **Reasoning:** A clear explanation of why their chosen answer might not be the most effective or helpful in that situation.
    * **Motivational Boost:** A motivational fact or a witty quote accompanied by a relevant image to offer encouragement and lighten the mood. Think of it as a gentle reminder to stay positive!
* **Scoring:** The application tracks the user's score, rewarding them for recognizing and selecting constructive responses.

## Key Features

* **Interactive Quiz:** Engaging scenarios designed to resonate with the experiences of software developers facing impostor syndrome.
* **Immediate Feedback:** Clear explanations for both correct and incorrect answers, promoting learning and self-reflection.
* **Motivational Content:** Uplifting quotes and images displayed for incorrect answers to encourage persistence and a positive mindset.
* **Scoring System:** Tracks progress and rewards users for identifying helpful responses.
* **Multi-Page Application:**
    * **Landing Page:** Welcomes users and introduces the purpose of the quiz.
    * **Quiz Page:** Presents the interactive quiz questions and answer choices.
    * **About Page:** Introduces the team members behind this project.
    * **Scoreboard:** Displays the user's final score (and potentially a way to track high scores in future iterations).
* **Client-Side Technologies:** Built using fundamental web technologies: HTML for structure, CSS for styling, and JavaScript for interactivity.
* **Planned Testing:** The project includes plans for thorough testing to ensure a smooth and reliable user experience.

## User Stories

* As a software developer experiencing impostor syndrome, I want to easily understand the purpose of this application on the landing page so I know if it can help me.
* As a user, I want to be presented with realistic scenarios that I might encounter in my software development career.
* As a user, when I answer a quiz question correctly, I want to receive positive feedback and have my score updated so I feel encouraged.
* As a user, when I answer a quiz question incorrectly, I want to understand why my answer wasn't the best option through a clear explanation.
* As a user who answered incorrectly, I want to see a motivational quote or fact with a funny image to help me feel better and not get discouraged.
* As a user, I want to be able to see my final score at the end of the quiz so I can track my progress and understanding.
* As a user, I want to learn more about the team that created this application on an "About" page so I can connect with them or understand their motivations.
* As a user, I want the application to be easy to navigate between the different pages (landing, quiz, about, scoreboard).
* As a developer of this application, I want to ensure the quiz logic and scoring are accurate through automated tests.
* As a user, I want the application to be visually appealing and easy to read so that I can focus on the content.

## Technologies Used

* HTML
* CSS
* JavaScript

## Project Structure

The application is organized into the following pages:

1.  **`index.html` (Landing Page):**
    * Provides an introduction to the quiz and its purpose.
    * Includes a call to action to start the quiz.
2.  **`quiz.html` (Quiz Page):**
    * Displays the quiz questions and answer choices.
    * Handles user interactions, feedback display, and scoring.
3.  **`about.html` (About Page):**
    * Introduces the team members who created this project.
    * May include brief bios or roles.
4.  **`scoreboard.html` (Scoreboard):**
    * Displays the user's final score after completing the quiz.
    * (Future feature: potentially track and display high scores).
5.  **`css/` (CSS Styles):**
    * Contains the stylesheets (`style.css` or similar) for the application's visual presentation.
6.  **`js/` (JavaScript Scripts):**
    * Contains the JavaScript files (`script.js` or similar) for handling quiz logic, feedback, scoring, and page interactions.
    * May include separate files for different functionalities.
7.  **`assets/img/` (Images):**
    * Stores images used throughout the application, including motivational images for incorrect answers.

## Testing

We plan to implement tests to ensure the functionality and reliability of the quiz logic, scoring system, and user interface interactions. This will help us identify and fix any potential issues before deployment.

### Development Testing

During development, we use Jest to ensure the functionality and reliability of the application's JavaScript logic.  This includes unit and integration tests for:

* Quiz question and answer handling
* Scoring calculations
* Feedback display
* Navigation logic

### Deployment Testing

Since this application is deployed on Github Pages, which serves static files, we perform manual testing to verify the user experience and functionality in a browser environment. The following tables outline the manual testing procedures for each page:

#### Landing Page (`index.html`)

| TEST ACTION                                                                    | EXPECTATION                                                                                               | RESULT    |
| :----------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :-------- |
| User opens the landing page URL                                                | The landing page is displayed with a title, introduction, and a call to action.                            | to be added   |
| User clicks the "Start Quiz" button                                            | The user is redirected to the quiz page (`quiz.html`).                                                    | to be added   |
| User views the page on different screen sizes (desktop, mobile)               | The layout is responsive and content is displayed correctly.                                               | to be added   |
| User checks for broken links/images.                                            | All links are functional, and all images are displayed correctly.                                           | to be added   |

#### Quiz Page (`quiz.html`)

| TEST ACTION                                                                    | EXPECTATION                                                                                                                                                                                          | RESULT    |
| :----------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| User opens the quiz page URL                                                   | The quiz page is displayed with the first question, answer options, and a score display.                                                                                                            | to be added   |
| User selects a correct answer                                                  | The user receives positive feedback, the score is updated, and the next question (or end of quiz) is displayed.                                                                                   | to be added   |
| User selects an incorrect answer                                                | The user receives feedback explaining why the answer is incorrect, a motivational message, and the next question (or end of quiz) is displayed.                                                | to be added   |
| User completes the quiz                                                        | The user is redirected to the scoreboard page (`scoreboard.html`) with their final score.                                                                                                   | to be added   |
| User navigates through multiple questions.                                         | The questions are displayed in the correct order, and the quiz functions as expected.                                                                                                                    | to be added   |
| User refreshes the page mid-quiz.                                               | The quiz restarts from the beginning (or the user's progress is saved - if implemented).                                                                                                      | to be added   |
| User attempts to manipulate the score in the browser's developer tools.        | The application logic prevents the score from being manipulated is responsive, and content is displayed correctly.                                                                                                                                       | to be added   |

#### About Page (`about.html`)

| TEST ACTION                                                                    | EXPECTATION                                                                        | RESULT    |
| :----------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- | :-------- |
| User opens the about page URL                                                  | The about page is displayed with information about the team members.                | to be added   |
| User views the team member information                                         |  The names, and any other displayed information about the team members are accurate.  | to be added   |
| User checks for broken links/images.                                            | All links are functional, and all images (if any) are displayed correctly.           | to be added   |
| User views the page on different screen sizes (desktop, mobile)                | The layout is responsive, and content is displayed correctly.                         | to be added   |

#### Scoreboard Page (`scoreboard.html`)

| TEST ACTION                                                                    | EXPECTATION                                                                                    | RESULT    |
| :----------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- | :-------- |
| User opens the scoreboard page URL                                             | The scoreboard page is displayed.                                                               | to be added   |
| User views their score after completing the quiz.                                 | The user's score from the completed quiz is displayed correctly.                                 | to be added   |
| User views the page on different screen sizes (desktop, mobile)                | The layout is responsive, and content is displayed correctly.                                    | to be added   |
| User navigates to the scoreboard without completing the quiz.                  | The scoreboard displays an appropriate message (e.g., "Complete the quiz to see your score").    | to be added   |
| User checks the layout and visual presentation of the scoreboard.            | The scoreboard is visually appealing and easy to read.                               | to be added   |

## Contributing

(Optional: If you plan to open-source and accept contributions)

We welcome contributions to this project! If you have ideas for new scenarios, motivational content, or improvements to the code, please feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).

## Team Members (Mention on the About Page)

* [Your Name/GitHub Handle]
* [Collaborator's Name/GitHub Handle]
* ... (Add all team members)

## Future Enhancements (Optional)

* More quiz questions and scenarios.
* User accounts to save progress.
* Categorization of questions by specific areas of impostor syndrome.
* A more detailed results page with personalized insights.
* Integration with social media to share scores (optional and with careful consideration of the sensitive nature of the topic).
* More diverse and inclusive scenarios.

We hope this quiz provides valuable support and encouragement to software developers on their journey to recognizing their skills and overcoming impostor syndrome!





