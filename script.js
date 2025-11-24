let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet das HTML-Tag href?",
    answer_1: "Text Fett",
    answer_2: "Container",
    answer_3: "Ein Link",
    answer_4: "Kursiv",
    right_answer: 3,
  },
  {
    question: "Wie bindet man eine Webseite in eine Webseite ein?",
    answer_1: "Beispiel 1",
    answer_2: "Beispiel 2",
    answer_3: "Beispiel 3",
    answer_4: "Beispiel 4",
    right_answer: 2,
  },
  {
    question: "Welches Attribut kann man nicht für Textarea verwenden?",
    answer_1: "readonly",
    answer_2: "max",
    answer_3: "from",
    answer_4: "spellcheck",
    right_answer: 1,
  },
  {
    question: "Wie definiert man in Javascript eine Variable?",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100;",
    answer_4: "let rate = 100;",
    right_answer: 4,
  },
  {
    question: "Wie definiert man in Javascript eine Variable?",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100;",
    answer_4: "let rate = 100;",
    right_answer: 4,
  },
  {
    question: "Wie definiert man in Javascript eine Variable?",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100;",
    answer_4: "let rate = 100;",
    right_answer: 4,
  },
];

//Globaler Zähler für die aktuelle Frage
let currentQuestion = 0;

// Initialisierung der Gesamtfragenanzahl: Hat man oben in der Variable 6 Fragen, werden 1 von 6 angezeigt
function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

    showQuestion(); //Die erste Frage wird direkt angezeigt
}

//Nach dem globalen Zähler die aktuelle Frage anzeigen
function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questiontext").innerHTML = question['question']; // Der Text wird in das HTML Element mit der ID questiontext geschrieben

  document.getElementById("answer_1").innerHTML = question['answer_1'];
  document.getElementById("answer_2").innerHTML = question['answer_2'];
  document.getElementById("answer_3").innerHTML = question['answer_3'];
  document.getElementById("answer_4").innerHTML = question['answer_4'];
}

// Antwort überprüfen
function answer(selection) {
  let question = questions[currentQuestion]; //Aktuelle Frage aus dem Fragenarray
  let selectedQuestionNumber = selection.slice(-1); //Welche Antwort wurde ausgewählt? answer_1 -> 1: Wir verwenden slice um den letzten Buchstaben auszulesen

    if (selectedQuestionNumber == question['right_answer']) { //Überprüfung ob die ausgewählte Antwort der richtigen Antwort entspricht: z.B. 3=3
        console.log("Richtige Antwort");
        document.getElementById(selection).parentNode.classList.add('bg-success'); //Hintergrund der ausgewählten Antwort grün färben
    } else {
        console.log("Falsche Antwort");
        document.getElementById(selection).parentNode.classList.add('bg-danger'); //Hintergrund der ausgewählten Antwort rot färben
}
}