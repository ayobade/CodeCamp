const QUIZ_QUESTIONS = [
    {
        question: "What does '===' mean in JavaScript?",
        options: ["Equal value", "Equal value and type", "Assignment", "Strict inequality"],
        answer: "Equal value and type"
    },
    {
        question: "Which of the following is a primitive data type in JavaScript?",
        options: ["Object", "Array", "String", "Function"],
        answer: "String"
    },
    {
        question: "What is the result of 2 + '2' in JavaScript?",
        options: ["4", "22", "NaN", "Error"],
        answer: "22"
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        options: ["let", "const", "var", "static"],
        answer: "const"
    },
    {
        question: "Which of these is NOT a valid variable name in JavaScript?",
        options: ["_name", "$value", "123abc", "userName"],
        answer: "123abc"
    },
    {
        question: "What is the result of typeof null?",
        options: ["'null'", "'undefined'", "'object'", "'nullobject'"],
        answer: "'object'"
    },
    {
        question: "What value does `parseInt('3.14')` return?",
        options: ["3", "3.14", "NaN", "4"],
        answer: "3"
    },
    {
        question: "Which of these defines a block-scoped variable?",
        options: ["var", "let", "const", "Both let and const"],
        answer: "Both let and const"
    },
    {
        question: "Which symbol is used for single-line comments?",
        options: ["//", "/*", "#", "<!--"],
        answer: "//"
    },
    {
        question: "What is the default value of an uninitialized variable?",
        options: ["null", "undefined", "0", "NaN"],
        answer: "undefined"
    },
    {
        question: "What is the scope of a variable declared with var?",
        options: ["Block-scoped", "Function-scoped", "Global only", "Loop-scoped"],
        answer: "Function-scoped"
    },
    {
        question: "What is hoisting?",
        options: [
            "Moving variables to global scope",
            "Function/variable declarations are moved to the top of their scope",
            "Attaching variables to window",
            "Delaying execution"
        ],
        answer: "Function/variable declarations are moved to the top of their scope"
    },
    {
        question: "Which variable declaration allows reassignment but not redeclaration?",
        options: ["let", "var", "const", "define"],
        answer: "let"
    },
    {
        question: "What is a global variable?",
        options: [
            "A variable that only exists in functions",
            "A variable accessible from anywhere in the code",
            "A variable inside a block",
            "A constant variable"
        ],
        answer: "A variable accessible from anywhere in the code"
    },
    {
        question: "Which of the following cannot be reassigned?",
        options: ["let", "var", "const", "function"],
        answer: "const"
    },
    {
        question: "Which variable is block-scoped?",
        options: ["var", "let", "const", "Both let and const"],
        answer: "Both let and const"
    },
    {
        question: "Which of the following is NOT hoisted?",
        options: ["var", "function", "const", "function declaration"],
        answer: "const"
    },
    {
        question: "What does 'scope' refer to?",
        options: [
            "The screen size",
            "The area in which variables are accessible",
            "The amount of code",
            "How deep a function is"
        ],
        answer: "The area in which variables are accessible"
    },
    {
        question: "Which is a valid way to define a function?",
        options: ["function foo() {}", "let foo = () => {}", "const foo = function() {}", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What does a return statement do?",
        options: ["Logs output", "Stops the program", "Exits loop", "Returns a value from a function"],
        answer: "Returns a value from a function"
    },
    {
        question: "What happens if a function doesn't return anything?",
        options: ["It returns 0", "It returns null", "It returns undefined", "It throws an error"],
        answer: "It returns undefined"
    },
    {
        question: "What is a callback function?",
        options: [
            "A function called at the end",
            "A function passed into another function",
            "A function that logs data",
            "An error handler"
        ],
        answer: "A function passed into another function"
    },
    {
        question: "What is an arrow function?",
        options: [
            "A function with special scope",
            "A shorthand for defining anonymous functions",
            "A function with a name",
            "A looped function"
        ],
        answer: "A shorthand for defining anonymous functions"
    },
    {
        question: "Which function method can set 'this' explicitly?",
        options: ["bind()", "call()", "apply()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What does the 'arguments' object contain?",
        options: ["All local variables", "All passed parameters", "Only strings", "Return values"],
        answer: "All passed parameters"
    },
    {
        question: "What is a pure function?",
        options: [
            "A function with no parameters",
            "A function that doesn't return",
            "A function with no side effects",
            "A function that modifies global variables"
        ],
        answer: "A function with no side effects"
    },
    {
        question: "How do you create an array?",
        options: ["let x = []", "let x = {}", "let x = ()", "let x = <>"],
        answer: "let x = []"
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which method removes the last element of an array?",
        options: ["pop()", "shift()", "splice()", "remove()"],
        answer: "pop()"
    },
    {
        question: "How do you access the second item in an array `x`?",
        options: ["x(1)", "x[1]", "x{1}", "x.1"],
        answer: "x[1]"
    },
    {
        question: "Which method creates a new array from a filtered existing one?",
        options: ["filter()", "map()", "reduce()", "slice()"],
        answer: "filter()"
    },
    {
        question: "What does Object.keys(obj) return?",
        options: ["Values of the object", "Keys of the object", "Length of the object", "Index of object"],
        answer: "Keys of the object"
    },
    {
        question: "Which method merges two arrays?",
        options: ["join()", "merge()", "concat()", "combine()"],
        answer: "concat()"
    },
    {
        question: "What is the purpose of `hasOwnProperty()`?",
        options: [
            "To check array values",
            "To verify if an object has a specific property",
            "To make an object immutable",
            "To remove a key"
        ],
        answer: "To verify if an object has a specific property"
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Display Object Mode", "Digital Order Machine", "Data Output Module"],
        answer: "Document Object Model"
    },
    {
        question: "Which method selects an element by ID?",
        options: ["getElementById()", "querySelector()", "getElementsByClassName()", "selectId()"],
        answer: "getElementById()"
    },
    {
        question: "Which method adds a class to an element?",
        options: ["element.setClass()", "element.classList.add()", "element.addClass()", "element.pushClass()"],
        answer: "element.classList.add()"
    },
    {
        question: "How do you attach a click event to a button?",
        options: [
            "button.addEventListener('click', handler)",
            "onClick(button)",
            "click(button)",
            "button.call(click)"
        ],
        answer: "button.addEventListener('click', handler)"
    },
    {
        question: "Which object is the root of the DOM?",
        options: ["window", "document", "body", "html"],
        answer: "document"
    },
    {
        question: "What does `preventDefault()` do?",
        options: [
            "Stops JS errors",
            "Stops default browser behavior",
            "Pauses a function",
            "Clears input fields"
        ],
        answer: "Stops default browser behavior"
    },
    {
        question: "What is the spread operator used for?",
        options: ["Cloning", "Merging", "Expanding arrays/objects", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which of these is a template literal?",
        options: ["'Hello'", "\"Hello\"", "`Hello ${name}`", "Hello + name"],
        answer: "`Hello ${name}`"
    },
    {
        question: "What does the 'async' keyword do?",
        options: [
            "Defines a function that returns a promise",
            "Creates a new thread",
            "Blocks execution",
            "Makes a function synchronous"
        ],
        answer: "Defines a function that returns a promise"
    },
    {
        question: "What does 'await' do?",
        options: [
            "Pauses function until promise resolves",
            "Skips error",
            "Waits for timeout",
            "Forces sync execution"
        ],
        answer: "Pauses function until promise resolves"
    },
    {
        question: "Which method is used to convert an object to a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "Object.toString()", "toJSON()"],
        answer: "JSON.stringify()"
    },
    {
        question: "What is closure in JavaScript?",
        options: [
            "A function within a function that has access to outer scope",
            "A function that ends execution",
            "A loop",
            "An object property"
        ],
        answer: "A function within a function that has access to outer scope"
    },
    {
        question: "What is the result of `Boolean('false')`?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true"
    },
    {
        question: "Which operator is used for optional chaining?",
        options: ["??", "?.", "::", "||"],
        answer: "?."
    },
    {
        question: "What is a promise?",
        options: [
            "An object representing a future value",
            "A callback",
            "An async function",
            "An if/else block"
        ],
        answer: "An object representing a future value"
    },
    {
        question: "Which method is used to handle promise success?",
        options: ["catch()", "then()", "resolve()", "await()"],
        answer: "then()"
    }
];

const QuizState = {
    currentQuestionIndex: 0,
    score: 0,
    timeLeft: 15,
    timer: null,
    shuffledQuestions: [],
    isQuizActive: false
};

const Elements = {
    screens: {
        welcome: document.getElementById('welcome-screen'),
        rules: document.getElementById('rules-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen')
    },
    buttons: {
        startQuiz: document.getElementById('start-quiz-btn'),
        exitRules: document.getElementById('exit-rules-btn'),
        continueQuiz: document.getElementById('continue-quiz-btn'),
        stopQuiz: document.getElementById('stop-quiz-btn'),
        restartQuiz: document.getElementById('restart-quiz-btn'),
        backHome: document.getElementById('back-home-btn')
    },
    quiz: {
        questionCounter: document.getElementById('question-counter'),
        timer: document.getElementById('timer'),
        score: document.getElementById('score'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container')
    },
    results: {
        title: document.getElementById('results-title'),
        questionsAnswered: document.getElementById('questions-answered'),
        finalScore: document.getElementById('final-score'),
        percentage: document.getElementById('percentage'),
        message: document.getElementById('results-message')
    }
};

const Utils = {
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    showScreen(screenId) {
        Object.values(Elements.screens).forEach(screen => {
            screen.style.display = 'none';
        });
        Elements.screens[screenId].style.display = 'flex';
    },

    getPerformanceMessage(percentage, stoppedEarly = false) {
        if (stoppedEarly) {
            if (percentage >= 80) return 'Great job! You were doing excellent!';
            if (percentage >= 60) return 'Good work! You were on the right track!';
            if (percentage >= 40) return 'Keep practicing! You can improve!';
            return 'Don\'t give up! Practice makes perfect!';
        } else {
            if (percentage >= 80) return 'Excellent! You have a strong understanding of JavaScript!';
            if (percentage >= 60) return 'Good job! You have a solid foundation in JavaScript!';
            if (percentage >= 40) return 'Not bad! Keep practicing to improve your skills!';
            return 'Keep studying! JavaScript takes time to master!';
        }
    }
};

const Quiz = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        Elements.buttons.startQuiz.addEventListener('click', () => this.showRules());
        Elements.buttons.exitRules.addEventListener('click', () => this.showWelcome());
        Elements.buttons.continueQuiz.addEventListener('click', () => this.startQuiz());
        Elements.buttons.stopQuiz.addEventListener('click', () => this.stopQuiz());
        Elements.buttons.restartQuiz.addEventListener('click', () => this.startQuiz());
        Elements.buttons.backHome.addEventListener('click', () => this.goHome());
    },

    showWelcome() {
        Utils.showScreen('welcome');
    },

    showRules() {
        Utils.showScreen('rules');
    },

    startQuiz() {
        QuizState.currentQuestionIndex = 0;
        QuizState.score = 0;
        QuizState.timeLeft = 15;
        QuizState.isQuizActive = true;
        QuizState.shuffledQuestions = Utils.shuffleArray(QUIZ_QUESTIONS);
        
        Utils.showScreen('quiz');
        this.showQuestion();
    },

    showQuestion() {
        if (QuizState.currentQuestionIndex >= QuizState.shuffledQuestions.length) {
            this.showResults();
            return;
        }

        const question = QuizState.shuffledQuestions[QuizState.currentQuestionIndex];
        
        Elements.quiz.questionCounter.textContent = `Question ${QuizState.currentQuestionIndex + 1} of ${QuizState.shuffledQuestions.length}`;
        Elements.quiz.score.textContent = `Score: ${QuizState.score}`;
        
        Elements.quiz.questionText.textContent = question.question;
        
        Elements.quiz.optionsContainer.innerHTML = question.options.map(option => 
            `<button class="option-btn" data-option="${option}">${option}</button>`
        ).join('');
        
        Elements.quiz.optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswer(e));
        });
        
        this.startTimer();
    },

    handleAnswer(event) {
        const selectedAnswer = event.target.dataset.option;
        const correctAnswer = QuizState.shuffledQuestions[QuizState.currentQuestionIndex].answer;
        
        this.stopTimer();
        
        if (selectedAnswer === correctAnswer) {
            QuizState.score++;
            event.target.classList.add('correct');
        } else {
            event.target.classList.add('incorrect');
            Elements.quiz.optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
                if (btn.dataset.option === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }
        
        Elements.quiz.optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
        });
        
        Elements.quiz.score.textContent = `Score: ${QuizState.score}`;
        
        setTimeout(() => {
            QuizState.currentQuestionIndex++;
            this.showQuestion();
        }, 2000);
    },

    startTimer() {
        QuizState.timeLeft = 15;
        Elements.quiz.timer.textContent = `Time: ${QuizState.timeLeft}s`;
        
        QuizState.timer = setInterval(() => {
            QuizState.timeLeft--;
            Elements.quiz.timer.textContent = `Time: ${QuizState.timeLeft}s`;
            
            if (QuizState.timeLeft <= 0) {
                this.handleTimeUp();
            }
        }, 1000);
    },

    stopTimer() {
        if (QuizState.timer) {
            clearInterval(QuizState.timer);
            QuizState.timer = null;
        }
    },

    handleTimeUp() {
        this.stopTimer();
        
        Elements.quiz.optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
        });
        
        const correctAnswer = QuizState.shuffledQuestions[QuizState.currentQuestionIndex].answer;
        Elements.quiz.optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.dataset.option === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        
        setTimeout(() => {
            QuizState.currentQuestionIndex++;
            this.showQuestion();
        }, 2000);
    },

    stopQuiz() {
        this.stopTimer();
        QuizState.isQuizActive = false;
        this.showResults(true);
    },

    showResults(stoppedEarly = false) {
        const questionsAnswered = QuizState.currentQuestionIndex;
        const percentage = Math.round((QuizState.score / QUIZ_QUESTIONS.length) * 100);
        
        Elements.results.title.textContent = stoppedEarly ? 'Quiz Stopped!' : 'Quiz Complete!';
        Elements.results.questionsAnswered.textContent = `${questionsAnswered}/${QuizState.shuffledQuestions.length}`;
        Elements.results.finalScore.textContent = `${QuizState.score}/${QuizState.shuffledQuestions.length}`;
        Elements.results.percentage.textContent = `${percentage}%`;
        Elements.results.message.textContent = Utils.getPerformanceMessage(percentage, stoppedEarly);
        
        Utils.showScreen('results');
    },

    goHome() {
        QuizState.currentQuestionIndex = 0;
        QuizState.score = 0;
        QuizState.isQuizActive = false;
        this.stopTimer();
        location.reload();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Quiz.init();
});
