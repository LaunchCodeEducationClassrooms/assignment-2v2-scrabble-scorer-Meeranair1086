// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(wordInput) {
   console.log("Let's play some scrabble! \n");
   wordInput=input.question("Enter a Word to score: ");
    return wordInput
};

let simpleScore=function(oneWord){  
   simpleScore = oneWord.length;
    return console.log(`Score for ${oneWord}: ${simpleScore} \n`);
      }
  
const vowelStr= {
  1: [ 'L', 'N', 'R', 'S', 'T','D', 'G','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y','K','J', 'X','Q', 'Z'],
  3: ['A', 'E', 'I', 'O','U',]
};

let vowelBonusScore;
function vowelBonusScorer(oneWord){

  vowelBonusScore=oneWord.toUpperCase();
  
  let newvowelScoreValue=0;
for (let i = 0; i < vowelBonusScore.length; i++) {
 
	  for (const vowelScoreValue in vowelStr) {
 
		 if (vowelStr[vowelScoreValue].includes(vowelBonusScore[i])) {
       newvowelScoreValue+=parseInt(vowelScoreValue);
		 }
	  }
	}
	return console.log(`Score for ${vowelBonusScore}: ${newvowelScoreValue} \n`);
  }

  


function oldScrabbleScorer(oneWord){
  scrabbleScore=oneWord.toUpperCase();
    let newScrabbleScore=0;
for (let i = 0; i < scrabbleScore.length; i++) {
 
	  for (const scrabbleScoreValue in oldPointStructure) {
 
		 if (oldPointStructure[scrabbleScoreValue].includes(scrabbleScore[i])) {
       newScrabbleScore+=parseInt(scrabbleScoreValue);
    }
    }
  }
    return console.log(`Score for ${scrabbleScore}: ${newScrabbleScore} \n`);
}

let scrabbleScore;
/*
    let simpleObject=function (word1){
      return simpleScorer(word1);
     }
    let vowelBonusObject =function (word1){
     return vowelBonusScorer(word1);
     }
    let scrabbleObject =function (word){
     return scrabbleScorer(word);
    }*/

const scoringAlgorithms = [
  {
    'name': 'Simple Score',
    'Description':'One point per character',
    'scoringFunction': simpleScore
  },

   {
    'name': 'Vowel Bonus Score',
    'Description':'Vowels are worth 3 points',
    'scoringFunction': vowelBonusScorer
  },
  
   {
    'name': 'Scrabble Score',
    'Description':'Uses scrabble point system',
    'scoringFunction': scrabbleScorer
  }
  
  ];

function scorerPrompt(wordInput2) {
  
  const input1 = require('readline-sync');
  let selectAlgorithms = input1.question("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

  if (selectAlgorithms==0){    
       console.log("Algorithm Name: "+scoringAlgorithms[0].name);
       console.log(scoringAlgorithms[0].scoringFunction(wordInput2));
  }     
     else if(selectAlgorithms==1){
       console.log("Algorithm Name: "+scoringAlgorithms[1].name);
       console.log(scoringAlgorithms[1].scoringFunction(wordInput2));
     }
     else if(selectAlgorithms==2){
       console.log("Algorithm Name: "+scoringAlgorithms[2].name);
       console.log(scoringAlgorithms[2].scoringFunction(wordInput2));
     }
     
       return "";
}


let newPointStructure={};

function transform(oldPointObject) {

       for (let item in oldPointObject) {
for (let i = 0; i < oldPointObject[item].length; i++) {
  newPointStructure[(oldPointObject[item][i]).toLowerCase()] = item;
}

//newPointStructure[' '] = 0;
}

return newPointStructure;

}


function scrabbleScorer(oneWord){
  scrabbleScore=oneWord.toLowerCase();
   let newScrabbleScore=0;
for (let i = 0; i < scrabbleScore.length; i++){
newScrabbleScore += Number(newPointStructure[scrabbleScore[i]]);
}

  return console.log(`Score for ${oneWord}: ${newScrabbleScore} \n`);
}
  
function runProgram() {
  newPointStructure=transform(oldPointStructure);
   let wordInput1=initialPrompt();
   console.log(scorerPrompt(wordInput1));  
   
   
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

