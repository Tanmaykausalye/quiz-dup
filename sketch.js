var contestantCount, database, quiz, question, contestant, allcontestants;

var gameState = 0

function setup(){
  canvas = createCanvas(850,400);
  var database = firebase.database()

   quiz = new Quiz();
   quiz.getState();
   quiz.start();
}

function draw(){
  background("pink");


  
}
