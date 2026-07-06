const quiz = [

    {
        question: "Which language runs inside a web browser?",
        answers: [
            "Python",
            "JavaScript",
            "C++",
            "Java"
        ],
        correct:1
    },

    {
        question: "What does HTML stand for?",
        answers:[
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Machine Language",
            "Home Tool Markup Language"
        ],
        correct:0
    },

    {
        question:"Which company created JavaScript?",
        answers:[
            "Google",
            "Microsoft",
            "Netscape",
            "Apple"
        ],
        correct:2
    },

    {
        question:"Which symbol is used for comments in JavaScript?",
        answers:[
            "<!-- -->",
            "//",
            "#",
            "**"
        ],
        correct:1
    }

];

let currentQuestion = 0;
let score = 0;

const question =
document.getElementById("question");

const answers =
document.getElementById("answers");

const progress =
document.getElementById("progress");

function loadQuestion(){

    answers.innerHTML="";

    const q = quiz[currentQuestion];

    question.textContent=q.question;

    progress.textContent=
    `Question ${currentQuestion+1} of ${quiz.length}`;

    q.answers.forEach((answer,index)=>{

        const button=document.createElement("button");

        button.textContent=answer;

        button.addEventListener("click",()=>{

            if(index===q.correct){

                button.classList.add("correct");

                score++;

            }else{

                button.classList.add("wrong");

            }

            document.querySelectorAll("button")
            .forEach(btn=>btn.disabled=true);

            setTimeout(()=>{

                currentQuestion++;

                if(currentQuestion<quiz.length){

                    loadQuestion();

                }else{

                    showResult();

                }

            },1000);

        });

        answers.appendChild(button);

    });

}

function showResult(){

    let remark="";

    const percentage=(score/quiz.length)*100;

    if(percentage>=70){

        remark="Excellent!";

    }else if(percentage>=50){

        remark="Good Job!";

    }else{

        remark="Needs Improvement";

    }

    question.textContent="Quiz Completed";

    answers.innerHTML=`
        <h2>Your Score: ${score}/${quiz.length}</h2>
        <h3>${remark}</h3>
    `;

    progress.textContent="";
}

loadQuestion();