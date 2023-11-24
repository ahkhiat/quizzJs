/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: [
      "1967",
      "1974", 
      "1962", 
      "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: [
      "Zelda", 
      "Ganon", 
      "Tom", 
      "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: [
      "Apollo 9", 
      "Mercury 1", 
      "Apollo 13", 
      "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
console.log("script quiz chargé")

let question = document.querySelector("#question");
let reponses = document.querySelector("#answers");
let questionActuelle = 0;
let score = 0;
let bonneReponseIndex = questions[questionActuelle].correctAnswerIndex;
let bonneReponse = questions[questionActuelle].answers[bonneReponseIndex];


document.addEventListener("DOMContentLoaded", () => {
  
// démarrage du quizz
console.log(questions)

genererQuestion()
function genererQuestion() {
  question.innerText = questions[questionActuelle].question;
  bonneReponseIndex = questions[questionActuelle].correctAnswerIndex;
  bonneReponse = questions[questionActuelle].answers[bonneReponseIndex];
      for (let i=0; i < questions[questionActuelle].answers.length; i++) {
        // console.log(questions[questionActuelle].answers[i])
        let reponse = document.createElement("li");
        reponse.classList.add("answer");
        reponse.innerText = questions[questionActuelle].answers[i]
        reponses.appendChild(reponse)
    }
  console.log("Index Bonne reponse", bonneReponseIndex)
  console.log(bonneReponse)
}

function afficherScore() {
  let cadreScore = document.querySelector("#score")
  cadreScore.innerText = score
}

function questionSuivante () {
      reponses.innerHTML = "";

  if (questionActuelle < questions.length - 1) {
        questionActuelle++;
        genererQuestion();
        afficherScore();
    } else {
        question.innerText = "";
        question.innerHTML = `Merci d'avoir participé à ce quiz, votre score est de ${score} bonnes réponses sur 4 !`
        reponses.remove();
        afficherScore();
  }
}


reponses.addEventListener("click", (event) => {
  let reponseChoisie = event.target.innerText
  console.log(reponseChoisie)

  if (reponseChoisie == bonneReponse) {
    console.log("c'est gagné")
    score++;
    console.log("score", score)
    console.log("question actuelle", questionActuelle)
    questionSuivante()
  } else {
    questionSuivante()
  }

})
  


});
