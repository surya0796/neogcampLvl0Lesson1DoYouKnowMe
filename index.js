const readlineSync = require("readline-sync");
const chalk = require("chalk");
const headingColor = chalk.rgb(117, 243, 250);
const resultColor = chalk.bgMagenta.italic.bold;
const anwserColor = chalk.rgb(152, 251, 137).italic.bold;
const questionColor = chalk.rgb(250, 119, 107);
const wrongAnsColor = chalk.rgb(107, 169, 250);
const userName = readlineSync.question(headingColor("Type your name: "));
const scaling = readlineSync.question(headingColor("\nHow much do you know me? Scale yourself between 1 to 10: \n"));
console.clear()
let currentScore = 0;

const highScores = [
  {
    name: "Surya",
    score: 7
  },
  {
    name:"Aakanksha",
    score:6
  }
]

const mainQuestionBank = [
  {
    question: "Where do I spend most of my time?",
    answer: "you tube",
    options: ["anime","computer games","you tube","coding"]
  },
  {
    question: "What am I passionate about?",
    answer: "languages",
    options:["food","movies","electronics","languages"]
  },
  {
    question: "What is my favorite food?",
    answer: "paneer",
    options:["paneer","burger","kulcha","pizza"]
  },
  {
    question: "Do i sleep alot?",
    answer: "no",
    options:["yes","no","sometimes yes sometimes no"]
  },
  {
    question: "How many girlfriends Have I ever had? Just Flexing :)",
    answer: "Just 1",
    options:["Too many to count","Just 1","Not one! I'm single, I'm sad:(","2"]
  },
  {
    question: "What's my dream?",
    answer: "Living in japan",
    options:["Living in japan","make a alot of money","live a peaceful life","die like a hero"]
  },
  {
    question: "Do I meditate?",
    answer: "yes",
    options:["I say yes to everybody, but I don't","yes","no","sometimes"]
  },
  {
    question: "How many times i use swear words in a day?",
    answer: "alot, but you can count",
    options:["too many to count","Just 1","Not one!","alot, but you can count"]
  },
  {
    question: "What kind of head hairs i want?",
    answer: "long",
    options:["short","medium","shaved","long"]
  },
  {
    question: "How much sweets i can eat in one go?",
    answer: "alot, but you can count",
    options:["too many to count","Just 1","Not one!","alot, but you can count"]
  }
  
]
let questionTally = mainQuestionBank.length;

//welcome function.
function welcome(){
  console.log(headingColor("Hi ") + chalk.cyanBright.italic(userName.toUpperCase()) + headingColor("! Welcome to \"DO YOU KNOW SURYA?\" \n\n"));
}
  
// function for quiz.
function quiz(question,options, answer) {
  console.log("\n\n"+questionColor(question));
  index = readlineSync.keyInSelect(options,questionColor("Select one option from the above."));
  console.clear()
  const userInput = options[index];
  if (userInput === answer){
    console.log(anwserColor("Woohooo! You are right!"))
    currentScore++;
  }
  else{
    console.log(wrongAnsColor("Sorry, you are wrong!!"))
  }    
    console.log(`Current-Score ${currentScore}.`)
  }

function callEveryQuestion(){
  for (let i=0; i < mainQuestionBank.length;i++){
  quiz(mainQuestionBank[i].question,mainQuestionBank[i].options,mainQuestionBank[i].answer);
  reduceCount();
  
}
}
// check no. of questions left.
function reduceCount(){
  questionTally--;
  if (questionTally >= 2){
    console.log(`${questionTally} questions left.`)
    }
  else{
    console.log(`${questionTally} question left.`)
  }
}
//function for comparing scores
function compareScores(highScore,currentScore){
  console.log(resultColor(`\n\nYour Final Score is ${currentScore}.`))
  
  if(currentScore>= scaling){
    console.log(questionColor("I kinda expected that!"))
  }
  else{
    console.log(questionColor("Hmmm(-_-) and I thought.... You knew me better(-_-)"))
  }
  let flag = false
  let latestHighScore = currentScore
  for(let j=0; j < highScore.length; j++){
    
    if(highScore[j].score < latestHighScore){
      flag = true;  
    }
    else{
      latestHighScore = highScore[j].score
    }
  }
  if(flag === true){
    console.log(headingColor("You reached a new highScore! Congrats :)\nPlease send a screenshot so that i can update your score."))
  } 
  else{
    console.log(headingColor(`Current High-Score is ${latestHighScore}. You are ${latestHighScore-currentScore} points behind`))
  }
}

welcome()
callEveryQuestion()
compareScores(highScores,currentScore)



