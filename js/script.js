/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//An array containing extra property lists (apart from 'quote' and 'source')
const extraProperties = ['citation', 'year', 'tag'];

//An object arrays containing the quotes
const quotes = [

    {
      quote: 'I reached for sleep and drew it round me like a blanket muffling pain and thought together in the merciful dark.',
      source: 'Mary Stewart',
    },

    {
      quote: 'We turn not older with years, but newer every day.',
      source: 'Emily Dickinson',
      year: '1830 - 1886',
      tag: 'Life'
    },

    {
      quote: 'Civilization is the art of living in towns of such size the everyone does not know everyone else.',
      source: 'Julian Jaynes',
      year: '1976',
      citation: 'The Origin of Consciousness'
    },

    {
      quote: 'Don\'t look back: Something may be gaining on you.',
      source: 'Satchel Paige'
    },

    {
      quote: 'Sentiment without action is the ruin of the soul.',
      source: 'Edward Abbey',
      citation: 'A Voice Crying in the Wilderness',
      year: '1927 - 1989',
      tag: 'Classic'
    },

    {
      quote: 'The aim of art is to represent not the outward appearance of things, but their inward significance.',
      source: 'Aristotle'
    },

    {
      quote: 'The soul of this man is in his clothes.',
      source: 'William Shakespeare',
      year: '1564 - 1616'
    }
]

//Allowing automatic printQuote function callback every 10s
const intervalRefresh = setInterval(printQuote, 10000);

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  let randomQuoteObj = {};

  //Get random index from 0 to length of the quotes object array
  let randomIndex = Math.floor(Math.random() * quotes.length);

  //Get the random quote object
  randomQuoteObj = quotes[randomIndex];

  return randomQuoteObj;
}

/***
 * `printQuote` function
***/

function printQuote(){
  let randomQuote = getRandomQuote();
  
  let htmlString = `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}`;

  // Dynamically test for extra properties 
  // If the quote object contain the property then add the associated html string
  // Note: Probably should be an extra function for better visibility and separation of concern
  for(let i = 0; i < extraProperties.length ; i++){

    //Current property from the extra property list
    let currProperty = extraProperties[i];


    if(randomQuote[currProperty] && currProperty === 'tag'){

      //As there is no style for 'tag' property i.e. no ',' after we need to manually add it here
      //as we are now allowed to change the css file
      htmlString += `<span class=${currProperty}>, ${randomQuote[currProperty]} </span>`;
    
    }
    else if(randomQuote[currProperty]){
      htmlString += `<span class=${currProperty}> ${randomQuote[currProperty]} </span>`;
    }
  }

  htmlString += `</p>`;

  //Update the quote
  document.getElementById('quote-box').innerHTML = htmlString;
  //Update the background color
  document.querySelector('body').style.backgroundColor = getRandomColor();

  return;
}

/***
 * `getRandomColor` function
***/
function getRandomColor(){
  const hexLength = 6; //Maximum length of Hex color code is 6

  const possibleCode = '0123456789ABCDEF'; //All possible letters used in Hex color code

  let colorCode = '#'; //The Hex color code always starts with '#'

  for (let i = 0; i < hexLength; i++){
    //Randomly get a letter from the possible letter pool for current color code char
    colorCode += possibleCode[Math.floor(Math.random() * possibleCode.length)];
  }

  return colorCode;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);