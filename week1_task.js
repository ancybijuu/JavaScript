
console.log("===== JAVASCRIPT QUIZ =====");

const questions = [
    {
        question: "What is the output of 10 + 5?",
        options: ["105", "15", "50", "5"],
        answer: 2
    },
    {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["var", "let", "const", "function"],
        answer: 2
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["pop()", "push()", "shift()", "slice()"],
        answer: 2
    },
    {
        question: "Which loop repeats while a condition is true?",
        options: ["if", "while", "switch", "break"],
        answer: 2
    },
    {
        question: "Which symbol is used for strict equality in JavaScript?",
        options: ["=", "==", "===", "!="],
        answer: 3
    }
];

let score = 0;

// Function to display a question and get the user's answer
function askQuestion(question, index) {

    console.log("\nQuestion " + (index + 1) + ": " + question.question);

    let optionsMessage = "";

    for (let i = 0; i < question.options.length; i++) {
        console.log((i + 1) + ". " + question.options[i]);

        optionsMessage += (i + 1) + ". " + question.options[i] + "\n";
    }

    let userAnswer = Number(
        prompt(
            "Question " + (index + 1) + ": " + question.question +
            "\n\n" + optionsMessage +
            "\nEnter your answer (1-4):"
        )
    );

    if (userAnswer === question.answer) {
        console.log("Correct Answer!");
        score++;
    } else {
        console.log("Wrong Answer!");
        console.log(
            "Correct Answer: " +
            question.options[question.answer - 1]
        );
    }

    console.log("----------------------------");
}

// Function to run the quiz
function startQuiz() {

    for (let i = 0; i < questions.length; i++) {
        askQuestion(questions[i], i);
    }

    displayResult();
}

// Function to display the final result
function displayResult() {

    let totalQuestions = questions.length;
    let incorrectAnswers = totalQuestions - score;
    let percentage = (score / totalQuestions) * 100;

    console.log("\n===== QUIZ RESULT =====");
    console.log("Total Questions: " + totalQuestions);
    console.log("Correct Answers: " + score);
    console.log("Incorrect Answers: " + incorrectAnswers);
    console.log("Final Score: " + score + "/" + totalQuestions);
    console.log("Percentage: " + percentage + "%");
}

// Start the quiz
startQuiz();
