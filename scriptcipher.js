const alphabet = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghajklmnopqrstuvwxyz";

const upperCase = alphabet.slice(0, 26); // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = alphabet.slice(26); //'abcdefghajklmnopqrstuvwxyz'

function caesarCipher(str, shiftPos) {
  return str
    .split("")
    .map((char) => {
      // Handle uppercase letters
      if (upperCase.includes(char)) {
        //checks if char is upper case (returns True if found)
        let newAlphbetIndex = (upperCase.indexOf(char) + shiftPos) % 26; // finds the index of upper case char (A-0, B-1...)
        if (newAlphbetIndex < 0) newAlphbetIndex = +26; // handle negative shifts
        return upperCase[newAlphbetIndex]; // returns the new index position
        // // Handle lowercase letters
      } else if (lowerCase.includes(char)) {
        // checks if char is lower case (returns True if found)
        let newAlphbetIndex = (lowerCase.indexOf(char) + shiftPos) % 26; // finds the index of lower case char (a-0, b-1...)
        if (newAlphbetIndex < 0) newAlphbetIndex = +26; //handle negative shifts ((-1)  -1 +26 = 25 = z)
        return lowerCase[newAlphbetIndex]; // returns the new index position
      } else {
        return char; //makes sure that non alphbetic char's won't change
      }
    })
    .join(""); // joins the array back to string
}

// retrive input from user

const userInput = process.argv[2]; // takes user input into the array in the 3rd position (first command from user)
const shiftValue = parseInt(process.argv[3], 10); // takes user input in the 4th position (second user command) + string should be parsed as a decimal (base-10) number.

// checks if arguments/inputs are valid

if (!userInput || isNaN(shiftValue)) {
  // if user did not enter a valid word and or a valid number for shifting
  console.log(
    "Please enter valid words in double quotations and a valid shift number"
  );
  process.exit(1); // exits the program
}

//preforms the cipher

const result = caesarCipher(userInput, shiftValue);
console.log(result);
