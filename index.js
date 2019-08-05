let questionNumber = 0;
let score = 0;

//The datastore for all the question objects
const STORE = [
    {
        question: 'What is the name of the main character from Neil Gaiman’s Sandman?',
        answers: [
            'The Sandman',
            'Frank',
            'Dream',
            'Phobia'
        ],
        correctAnswer: 'Dream',
        icon: 'Assets/DreamAnswer.jpg',
        alt: 'Dream letting sand sift through his fingers'
    },
    {
        question: 'Why did Thanos really wipe out half of all life in the universe using the Infinity Gauntlet?',
        answers: [
            'To balance the cosmos.',
            'To impress a woman.',
            'A deal with the devil.',
            'Just for fun.'
        ],
        correctAnswer: 'To impress a woman.',
        icon: 'Assets/ThanosAnswer.jpg',
        alt: 'comic page depicts Thanos talking to Death and Mephisto about his task to wipe out half of all life in the universe at Death \'s behest'
    },
    {
        question: 'What caused Harry Osborn to step into his father’s alter ego, The Green Goblin?',
        answers: [
            'Daddy Issues',
            'A radioactive spider bite',
            'Bad LSD',
            'His wife cheated on him'
        ],
        correctAnswer: 'Bad LSD',
        icon: 'Assets/HarryOsborneAnswer.jpg',
        alt: 'Harry Osborne with a distraught face on a colorful background of pills'
    },
    {
        question: 'What is the name of the laboratory that gave Wolverine metal bones',
        answers: [
            'CERN',
            'Claw Labs',
            'Dexler research institute',
            'The Weapon X Program'
        ],
        correctAnswer: 'The Weapon X Program',
        icon: 'Assets/WeaponXAnswer.jpg',
        alt: 'Iconic image of Wolverine after escaping from the weapon X labs, naked except for a metal headset and tubes coming from his back'
    },
    {
        question: 'What is the name of Superman’s son?',
        answers: [
            'Jonathon Kent',
            'Ken Lane',
            'Frank',
            'Conner Kent'
        ],
        correctAnswer: 'Jonathon Kent',
        icon: 'Assets/SupermanAndSonAnswer.jpg',
        alt: 'Superman and son flying upward, both firing heat laser vision upward and with legs blurred from the intense speed, a backdrop of ominous red lightning storm'
    },
    {
        question: 'Who taught Batman to be an escape artist?',
        answers: [
            'Giovanni John Zattara',
            'Mr. Miracle',
            'Harry Houdini',
            'Alan Alan'
        ],
        correctAnswer: 'Giovanni John Zattara',
        icon: 'Assets/ZataraAnswer.jpg',
        alt: 'Magician Zattara casts a spell on two thugs by speaking words in reverse spelling'
    },
    {
        question: 'What was the technology used for healing injuries on Themyscira, home of Wonder Woman?',
        answers: [
            'Kangaroos',
            'The Lasso of Truth',
            'Medicinal Herbs',
            'Purple Rays'
        ],
        correctAnswer: 'Purple Rays',
        icon: 'Assets/PurpleRaysAnswer.png',
        alt: 'Comic Strip of WonderWoman discovering the frequency at which purple rays of light will heal injuries, which she uses to heal an injured amazon'
    },
    {
        question: 'What is the weapon Mr. Fantastic uses to threaten Galactus the Planet Eater?',
        answers: [
            'All of Earth’s nukes',
            'The Ultimate Nullifier',
            'The Incredible Hulk',
            'The Ebony Blade'
        ],
        correctAnswer: 'The Ultimate Nullifier',
        icon: 'Assets/UltimateNullifierAnswer.jpg',
        alt: 'Reed Richards threatens Galactus the Planet Eater with the Ultimate Nullifier'
    },
    {
        question: 'What is the name of Bruce Banner’s alternate personality who worked as hired muscle for the casinos in Las Vegas?',
        answers: [
            'Joe Fixit',
            'Frank',
            'Doc Green',
            'The Devil Hulk'
        ],
        correctAnswer: 'Joe Fixit',
        icon: 'Assets/GreyHulkAnswer.jpg',
        alt: 'Joe Fixit, the Grey Hulk, in a blue suit with black pinstripe, in the background a man and woman dressed as a roman and Cleopatra hint he is at the Caesar \'s palace casino in Las Vegas'
    },
    {
        question: 'What is the Punisher’s real name?',
        answers: [
            'Steve',
            'Larry',
            'Moe',
            'Frank'
        ],
        correctAnswer: 'Frank',
        icon: 'Assets/PunisherAnswer.jpg',
        alt: 'The Punisher, looking down, sitting with handgun in one hand, the other hand palm raised toward the viewer'
    }
];
//End of the datastore

function generateQuestion() {
    console.log("The question has been generated");
    if (questionNumber < STORE.length) {
        return `<div class="question-${questionNumber}">
        <h2>${STORE[questionNumber].question}</h2>
        <form>
        <fieldset>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
        <span>${STORE[questionNumber].answers[0]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
        <span>${STORE[questionNumber].answers[1]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
        <span>${STORE[questionNumber].answers[2]}</span>
        </label>
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
        <span>${STORE[questionNumber].answers[3]}</span>
        </label>
        <button type="submit" class="submitButton">Submit</button>
        </fieldset>
        </form>
        </div>`;
    } else {
        renderResults();
        restartQuiz();
        $('.question-number').text(10)
    }
}

function renderQuestion() {
    $('.question-answer-form').html(generateQuestion());
}

function submitAnswer() {
    $('.question-answer-form').on('click', ('.submitButton'), (event => {
        event.preventDefault();
        console.log("The answer has been submitted.")
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        if (answer === correctAnswer) {
            selected.parent().addClass('correct');
            ifAnswerIsCorrect();
        } else {
            selected.parent().addClass('wrong');
            ifAnswerIsWrong();
        }
    }));
}

function ifAnswerIsCorrect() {
    console.log("The answer is correct")
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    $('.question-answer-form').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
    score++;
    $('.current-score').text(score);
}

function ifAnswerIsWrong() {
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    // let iconImage = `${STORE[questionNumber].icon}`;
    $('.question-answer-form').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

function startQuiz() {
    console.log("We are ready to start the quiz");
    $('.quiz-start').on('click', $('.start-quiz-button'), event => {
        console.log("The quiz has been started");
        $('.quiz-start').remove();
        $('.question-answer-form').css('display', 'flex');
        $('.question-number').text(1);
    })
}

function renderNextQuestion() {
    $('.question-answer-form').on('click', ('.nextButton'), event => {
        questionNumber++;
        generateQuestion();
        renderQuestion();
        $('.question-number').text(questionNumber + 1)
    });
}

function renderResults() {
    if (score >= 8) {
        $('.question-answer-form').html(`<div class="results correctFeedback"><h3>Excelcior!</h3><img src="Assets/ExcelsiorResult.jpg" alt="illustration of Stan Lee with the word excelsior over his head"/><p>You got ${score} / 10</p><p>You're Marvelous!</p><button class="restartButton">Restart Quiz</button></div>`);
    } else if (score < 8 && score >= 5) {
        $('.question-answer-form').html(`<div class="results correctFeedback"><h3>So Close!</h3><img src="Assets/JusticeLeagueResult.jpg" alt="DC Superheroes are lined up looking intimidating"/><p>You got ${score} / 10</p><p>But these guys aren't impressed!</p><button class="restartButton">Restart Quiz</button></div>`);
    } else {
        $('.question-answer-form').html(`<div class="results correctFeedback"><h3>Not very super...</h3><img src="Assets/ArchieResult.jpg" alt="The cover of an issue of Archie comics"/><p>You got ${score} / 10</p><p>Stick with Archie comics, ya jughead.</p><button class="restartButton">Restart Quiz</button></div>`);
}
}

function restartQuiz()  {
    $('main').on('click', '.restartButton', function (event) {
        console.log('The user wants to start again! ')
        questionNumber = 0;
        score = 0;
        $('.question-number').text(questionNumber + 1);
        generateQuestion();
        renderQuestion();
        submitAnswer();
      });
}

function createQuiz() {
    console.log("the quiz has been created");
    startQuiz();
    renderQuestion();
    submitAnswer();
    renderNextQuestion();
}

createQuiz();
