'use strict';

function madLibs() {
  const madLib1 = 'The [ADJECTIVE] brown [ANIMAL] [PAST_VERB] [PREPOSITION] the [ADJECTIVE] [PLURAL_ANIMAL].';

  // fill out these words to complete the first mad lib!
  const adjective1 = getTextFromInput('#input1');
  const animal1 = getTextFromInput('#input2');
  const pastVerb1 = getTextFromInput('#input3');
  const preposition1 =  getTextFromInput('#input4');
  const adjective2 = getTextFromInput('#input5');
  const pluralAnimal1 = getTextFromInput('#input6');

  const listOfMadLibsVariables1 = [adjective1, animal1, pastVerb1, preposition1, pluralAnimal1];

  displayMadLib('#mad-lib-1', completeMadLib(madLib1, listOfMadLibsVariables1));





  // now, create your own mad lib
  const madLib2 = 'my 2nd favorite game is called [NAME] in this game you are a [ANiMAL] and you try and become rich by [verb]  [noun] ';

  const name1 = 'gta';
  const animal2 = 'human';
  const verb3 ='robbing'
  const noun4 = 'banks'
  const listOfMadLibsVariables2 = [name1, animal2, verb3, noun4];

  displayMadLib('#mad-lib-2', completeMadLib(madLib2, listOfMadLibsVariables2));
}






// ignore everything below this line

function completeMadLib(madLib, words) {
  const fillInRegex = /\[[A-Za-z0-9_\-]+\]/;
  return madLib.split(' ').map((word, index) => {
    if (fillInRegex.test(word)) {
      return word.replace(fillInRegex, words.shift());
    } else {
      return word;
    }
  }).join(' ');
}

function displayMadLib(cssSelector, string) {
  document.querySelector(cssSelector).textContent = string;
}

function getTextFromInput(cssSelector) {
  const element = document.querySelector(cssSelector);
  if (element) {
    return element.value;
  }
  return 'PLACEHOLDER';
}

madLibs();
