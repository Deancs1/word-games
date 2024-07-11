// pig latin

const vowels = "aeiou";
const consonants = "bcdfghjklmnpqrstvwxyz";

// function to split phrase to words considering punctuation
function splitToWords(phrase) {
  return phrase.match(/\w+|[^\w\s]/g);
}

// check if command-line phrase is provided
if (process.argv.length < 3) {
  // checks if there are less then 3 arguments - [0] - path to the Node.js executable, [1] - path to the JavaScript file being executed, [2] - first user-provided argument after the script name
  console.log("Please provide a phrase");
  process.exit(1);
}

// retrive phrase from user
let phrase = process.argv.slice(2).join(" "); // removes the first two elements from the array [0], [1]
// split a phrase to words
let words = splitToWords(phrase);

// check each word

function processWord(word) {
  if (
    word.length > 1 && // xhecks that the word has at least 2 char's (letters)
    consonants.includes(word[0].toLowerCase()) && // checks if char's were converted to lower case
    vowels.includes(word[1].toLowerCase()) // checks if vowels were converted to lower case
  ) {
    return word.slice(1) + word[0] + "ay"; // moves first letter to end and adds "ay"

    return word;
  } else if (
    word.length > 1 &&
    consonants.includes(word[0].toLowerCase()) &&
    consonants.includes(word[1].toLowerCase())
  ) {
    return word.slice(2) + word.slice(0, 2) + "ay"; // removes 2 first letters and moves them to end and adds "ay"
  } //else return word;
  else if (word.length > 1 && vowels.includes(word[0].toLowerCase())) {
    // checks if char was converted to lower case and if it is a vowel
    return word + "way";
  }
}
// process each word using processWord function
let processWords = words.map(processWord);

let processedPhrase = processWords.join(" "); // returns back to string

console.log(processedPhrase);
