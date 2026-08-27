const questions = [
	
	{
		question: "Which language runs directly in a web browser?",
		options: ["Python", "JavaScript", "C++", "Java"],
	},
	{
		question: "What does HTML stand for?",
		options: [
			"HyperText Markup Language",
			"HighText Machine Language",
			"Hyperlink Text Management Language",
			"Home Tool Markup Language",
		],
	},
	{
		question: "Which CSS property changes text color?",
		options: ["font-style", "text-decoration", "color", "background"],
	},
	{
		question: "Which method adds an item to the end of an array?",
		options: ["shift()", "push()", "pop()", "slice()"],
	},
];

let currentQuestion = 0;
const answers = Array(questions.length).fill(null);

const questionNumber = document.querySelector("#question-number");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const questionText = document.querySelector("#question-text");
const optionsContainer = document.querySelector("#options");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");

function renderQuestion() {
	const question = questions[currentQuestion];
	const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

	questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
	progressPercent.textContent = `${progress}%`;
	progressBar.style.width = `${progress}%`;
	questionText.textContent = question.question;
	optionsContainer.replaceChildren();

	question.options.forEach((option, optionIndex) => {
		const optionButton = document.createElement("button");
		optionButton.type = "button";
		optionButton.className = "option";
		optionButton.textContent = option;
		optionButton.setAttribute("role", "radio");
		optionButton.setAttribute("aria-checked", answers[currentQuestion] === optionIndex);

		if (answers[currentQuestion] === optionIndex) {
			optionButton.classList.add("selected");
		}

		optionButton.addEventListener("click", () => {
			answers[currentQuestion] = optionIndex;
			renderQuestion();
		});
		optionsContainer.append(optionButton);
	});

	previousButton.disabled = currentQuestion === 0;
	nextButton.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next";
}

previousButton.addEventListener("click", () => {
	if (currentQuestion > 0) {
		currentQuestion -= 1;
		renderQuestion();
	}
});

nextButton.addEventListener("click", () => {
	if (currentQuestion < questions.length - 1) {
		currentQuestion += 1;
		renderQuestion();
	} else {
		nextButton.textContent = "Completed";
		nextButton.disabled = true;
	}
});

renderQuestion();