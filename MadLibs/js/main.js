// Save our 'new word' span to a variable.
var newWord = document.querySelector('.new-word');
var newWord2 = document.querySelector('.new-word2');
var newWord3 = document.querySelector('.new-word3');
var newWord4 = document.querySelector('.new-word4');
var blackBox = document.querySelector('h1');

// Arrays (lists) for some words and colors
var myWords = ['advanced', 'thug', 'pretty', 'popular', 'funky', 'fresh'];
var myWords2 = ['chainz', 'silk', 'fedoras', 'short shorts', 'jawdins', 'pink'];
var myWords3 = ['cher', 'lil B', 'britney spears', 'vaporwave', 'techno', 'bass'];
var myWords4 = ['sizzurp', 'gatorade', 'coffee', 'arizona iced tea', 'vitamin water', 'smoothies'];

var myColors = ['#0f0', '#ff0', '#0ff', '#f0f'];


// Get a random number and use it go get a random word in the array. 
var randomWordNum = Math.floor( Math.random() * myWords.length );
var randomWord = myWords[randomWordNum];
var randomWordNum2 = Math.floor( Math.random() * myWords2.length );
var randomWord2 = myWords2[randomWordNum2];
var randomWordNum3 = Math.floor( Math.random() * myWords3.length );
var randomWord3 = myWords3[randomWordNum3];
var randomWordNum4 = Math.floor( Math.random() * myWords4.length );
var randomWord4 = myWords4[randomWordNum4];

// Get a random number and use it go get a random color in the array.
var randomColorNum = Math.floor( Math.random() * myColors.length );
var randomColor = myColors[randomColorNum];


// Change the content and style of our word in the document.
newWord.innerHTML = randomWord;
newWord2.innerHTML = randomWord2;
newWord3.innerHTML = randomWord3;
newWord4.innerHTML = randomWord4;
newWord.style.color = randomColor;
newWord2.style.color = randomColor;
newWord3.style.color = randomColor;
newWord4.style.color = randomColor;


// ClICK ACTION

blackBox.addEventListener('click', function (event) {
// Arrays (lists) for some words and colors
var myWords = ['advanced', 'thug', 'pretty', 'popular', 'funky', 'fresh'];
var myWords2 = ['chainz', 'silk', 'fedoras', 'short shorts', 'jawdins', 'pink'];
var myWords3 = ['cher', 'lil b', 'britney spears', 'vaporwave', 'techno', 'bass'];
var myWords4 = ['sizzurp', 'gatorade', 'coffee', 'arizona iced tea', 'vitamin water', 'smoothies'];

var myColors = ['#0f0', '#ff0', '#0ff', '#f0f'];


// Get a random number and use it go get a random word in the array. 
var randomWordNum = Math.floor( Math.random() * myWords.length );
var randomWord = myWords[randomWordNum];
var randomWordNum2 = Math.floor( Math.random() * myWords2.length );
var randomWord2 = myWords2[randomWordNum2];
var randomWordNum3 = Math.floor( Math.random() * myWords3.length );
var randomWord3 = myWords3[randomWordNum3];
var randomWordNum4 = Math.floor( Math.random() * myWords4.length );
var randomWord4 = myWords4[randomWordNum4];

// Get a random number and use it go get a random color in the array.
var randomColorNum = Math.floor( Math.random() * myColors.length );
var randomColor = myColors[randomColorNum];


// Change the content and style of our word in the document.
newWord.innerHTML = randomWord;
newWord2.innerHTML = randomWord2;
newWord3.innerHTML = randomWord3;
newWord4.innerHTML = randomWord4;
newWord.style.color = randomColor;
newWord2.style.color = randomColor;
newWord3.style.color = randomColor;
newWord4.style.color = randomColor;

});
