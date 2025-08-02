
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
