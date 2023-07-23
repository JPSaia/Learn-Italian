// script.js
const flashcards = [
    { question: "to be(ser)", answer: "essere" },
    { question: "to have", answer: "avere" },
    { question:  "to make/to do", answer: "fare" },
    { question:  "to go", answer: "andare"},
    { question:  "to be able to", answer: "potere"},
    { question:  "to give", answer: "dare"},
    { question:  "to want", answer: "volere"},
    { question:  "to come", answer: "venire"},
    { question:  "to have to", answer: "dovere"},
    { question:  "to be/to stay(estar)", answer: "stare"},
    { question: "to say" , answer: "dire"},
    { question: "to know(saber)" , answer: "sapere"},
    { question: "to see", answer: "vedere"},
    { question: "to eat", answer: "mangiare"},
    { question: "to talk", answer: "parlare"},
    { question: "to go out/exit", answer: "uscire"},
    { question: "to take", answer: "prendere"},
    { question: "to like", answer: "piacere"},
    { question: "to read", answer: "leggere"},
    { question: "to love", answer: "amare"},
    { question: "to drink", answer: "bere"},
    { question: "to finish", answer: "finire"},
    { question: "to understand", answer: "capire"},
    { question: "to arrive", answer: "arrivire"},
    { question: "to write", answer: "scrivere"},
    { question: "to leave/to depart", answer: "partire"},
    { question: "to put/to place/to set", answer: "mettere"},
    { question: "to remain", answer: "rimanere"},
    { question: "to sleep", answer: "dormire"},
    { question: "to live", answer: "vivere"},
    { question: "to know(conocer)", answer: "conoscere"},
    { question: "to feel/to sense/to hear", answer: "sentire"},
    { question: "to cook", answer: "cucinare"},
    { question: "to study", answer: "studiare"},
    { question: "to play", answer: "giocare"},
    { question: "to ask/to demand", answer: "chiedere"},
    { question: "to find", answer: "trovare"},
    { question: "to believe", answer: "credere"},
    { question: "to open", answer: "aprire"},
    { question: "to work", answer: "lavorare"},
    { question: "to think", answer: "pensare"},
    { question: "to run", answer: "correre"},
    { question: "to keep", answer: "tenere"},
    { question: "to watch", answer: "guardare"},
    { question: "to call", answer: "chiamare"},
    { question: "to return", answer: "tomare"},
    { question: "to go up", answer: "salire"},
    { question: "to prefer", answer: "preferire"},
    { question: "to die", answer: "morire"},
    { question: "to wait", answer: "aspettare"},
    { question: "to buy", answer: "comprare"},
    { question: "to be born", answer: "nascere"},
    { question: "to search", answer: "cercare"},
    { question: "to lose", answer: "perdere"},
    { question: "to sing", answer: "cantare"},
    { question: "to pass", answer: "passare"},
    { question: "to start", answer: "cominciare"},
    { question: "to listen", answer: "ascoltare"},
    { question: "to succeed", answer: "riuscire"},
    { question: "to decide", answer: "decidere"},
    { question: "to live", answer: "abitare"},
    { question: "to fall", answer: "cadere"},
    { question: "to close", answer: "chiudare"},
    { question: "to leave", answer: "lasciare"},
    { question: "to choose", answer: "scegliere"},
    { question: "to carry", answer: "portare"},
    { question: "to recieve", answer: "ricevere"},
    { question: "to wash", answer: "lavare"},
    { question: "to answer", answer: "rispondere"},
    { question: "to sit", answer: "sedere"},
    { question: "to win", answer: "voncere"},
    { quistion: "to pay", answer: "pagare"},
    { question: "to raise/to lift", answer: "alzare"},
    { question: "to laugh", answer: "ridere"},
    { question: "to go down", answer: "scendere"},
    { question: "to encounter", answer: "incontrare"},
    { question: "to offer", answer: "offrire"},
    { question: "to learn", answer: "imparare"},
    { question: "to forget", answer: "dimenticare"},
    { question: "to wake up", answer: "svegliare"},
    { question: "to grow", answer: "crescere"},
    { question: "to sell", answer: "vendere"},
    { question: "to have fun", answer: "divertire"},
    { question: "to become", answer: "diventare"},
    { question: "to place/to put", answer: "porre"},
    { question: "to enter", answer: "entrare"},
    { question: "to fear", answer: "temere"},
    { question: "to clean", answer: "pulire"},
    { question: "to dress", answer: "vestire"},
    { question: "to follow", answer: "seguire"},
    { question: "to stay/to remain", answer: "restare"},
    { question: "to change", answer: "cambiare"},
    { question: "to travel", answer: "viaggiare"},
    { question: "to turn off", answer: "spegnere"},
    { question: "to remember", answer: "ricordare"},
    { question: "to appear", answer: "apparire"},
    { question: "to help", answer: "aiutare"},
    { question: "to be quiet", answer: "tacere"},
    { question: "to send/to ship", answer: "spedire"},
    { question: "to prepare", answer: "prepare"},
    // Add more flashcards here
  ];
  
  const flashcardContainer = document.getElementById("flashcard-container");
  const flashcard = document.getElementById("flashcard");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  let currentCardIndex = 0;
  let showQuestion = true;
  
  function showFlashcard(index) {
    const card = flashcards[index];
    flashcard.innerHTML = `<h2>${showQuestion ? "Question" : "Answer"}:</h2><p>${showQuestion ? card.question : card.answer}</p>`;
  }
  
  function showCurrentFlashcard() {
    showFlashcard(currentCardIndex);
  }
  
  function goToPrevCard() {
    currentCardIndex = Math.max(0, currentCardIndex - 1);
    showCurrentFlashcard();
  }
  
  function goToNextCard() {
    currentCardIndex = Math.min(flashcards.length - 1, currentCardIndex + 1);
    showCurrentFlashcard();
  }
  
  function flipFlashcard() {
    showQuestion = !showQuestion;
    showCurrentFlashcard();
  }
  
  prevBtn.addEventListener("click", goToPrevCard);
  nextBtn.addEventListener("click", goToNextCard);
  
  // Show the first flashcard on page load
  showCurrentFlashcard();
  