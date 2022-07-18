// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const result = "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(codedMessage(secretCodeWord1)).toEqual(result)
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

//     ReferenceError: codedMessage is not defined


const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.

// Pseudocode:
// 1. Create a function and a parameter to take a string input
// 2. We will want to use the .replaceAll built-in method, because it will replace multiple occurances of the letter we are trying to replace. If we used .replace only, it would just change the first occurance of the letter we want to change.
//      2a. Create a new variable called aString. Set it to equal the string parameter and use the .replaceAll method. We want to take the letter "a" and replace it with the string "4"
//      2b. Next, we will create a new variable called eString and set it to aString, the variable we just changed previously. We then use the same .replaceAll built-in method and replace "e" to "3".
//      2c. We continue steps 2b for the strings "i" and "o"
// 3. Once we have all 4 letters that we want to replaceAll with, then we are finished and all we have to do is return the last variable we had created, because it has stored all the changes we had made.

const codedMessage = (string) => {

    let aString = string.replaceAll("a", "4")
    let eString = aString.replaceAll("e", "3")
    let iString = eString.replaceAll("i", "1")
    let oString = iString.replaceAll("o", "0")
    let aString1 = oString.replaceAll("A", "4")
    let eString1 = aString1.replaceAll("E", "3")
    let iString1 = eString1.replaceAll("I", "1")
    let oString1 = iString1.replaceAll("O", "0")

    return oString1

}

console.log(codedMessage(secretCodeWord1)) // Output: L4ck4d41s1c4l
console.log(codedMessage(secretCodeWord2)) // Output: G0bbl3dyg00k
console.log(codedMessage(secretCodeWord3)) // Output: 3cc3ntr1c

//  PASS  ./code-challenges.test.js
//   codedMessage
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)


// Some notes I would add to this question is that uppercase characters were throwing off the output. An example was "Eccentric" would not change the E to a 3, because it was capitalized. I tried using a .LowerCase method, but realized it would change "Lackadaisical" to "l4ck4d41s1c4l"...which would make it incorrect, because the L was changed to lowercase. The final function works as intended, but it's very sloppy to read and could be coded more optimally.


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("returnArrayWithWords", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const output1 = ["Mango", "Apricot", "Peach"]

    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    const output2 = ["Cherry", "Blueberry", "Peach"]
        
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(returnArrayWithWords(fruitArray, letterA)).toEqual(output1)
        expect(returnArrayWithWords(fruitArray, letterE)).toEqual(output2)
    })
})

//     ReferenceError: returnArrayWithWords is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.

// Psuedocode:
// 1. Create a function called returnArrayWithWords and use 2 parameters called array and letter
// 2. Create a newArray variable that holds an empty array. This is what we will want to return in the end
// 3. Use a for loop to iterate through each item in the array
// 4. Create an if conditional
//      4a. We want to check if the array of [i] includes the letter from the parameter. We will use the .includes built-in method.
//      4b. We also want to use a .toLowerCase built-in method, because we want to check the characters from the beginning of the word if it contains the parameter from letter
//      4c. Within the if statement, if the word does include the letter, then we want to do a .push on the array of i that we are on into the newArray. This will essentially put the word in the new array if the letter is in the word.
// 5. Return the new array.

const returnArrayWithWords = (array, letter) => {
    let newArray = []

    for(let i=0; i<array.length; i++) {
        if(array[i].toLowerCase().includes(letter)) {
            newArray.push(array[i])
        }
    
    }
    return newArray;
}

// console.log(returnArrayWithWords(fruitArray, letterA))
// console.log(returnArrayWithWords(fruitArray, letterE))

// PASS  ./code-challenges.test.js
// returnArrayWithWords
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
            
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

//     ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const hand4 = [1, 2, 1, 2, 1] // Return true
const hand5 = [0, 0, 1, 1, 1] // Return true
const hand6 = [1, 2, 3, 4, 5] // Return false


// b) Create the function that makes the test pass.


// This was hands down, the hardest problem I had ever seen on an assessment. After about 2 hrs~ of failing the problem (wrong answers/ideas below), I had taken a long break from looking at it and came back with a refreshed mind and solved this with a solid solution within ~15 mins of trying again. I ran additional arrays to ensure the code was working with numbers in different positions and it still worked.

// Psuedocode:
// 1. Create a function called fullHouse and it takes in an array
// 2. Use the array and set it to array.sort to sort the array from lowest to highest
// 3. Use an if condition to check if array position 0, 1, & 2 is equal to each other and 3 and 4 is equal to each other. If the condition is met, then return true.
// 4. Use an else if condition to check if array position 0 and 1 is equal to each other and 2, 3, & 4 is equal to each other. If the condition is met, then return true.
// 5. There are no other conditions that can be true, so return false.


const fullHouse = (array) => {
    array = array.sort((a, b) => a-b)
    if((array[0] === array[1] && array[0] === array[2] && array[1] === array[2]) && (array[3] === array[4])) {
        return true;
    } else if((array[0] === array[1]) && (array[2] === array[3] && array[2] === array[4] && array[3] === array[4])) {
        return true;
    }
    return false;
}

console.log(fullHouse(hand1)) // Output: true
console.log(fullHouse(hand2)) // Output: false
console.log(fullHouse(hand3)) // Output: false

console.log(fullHouse(hand4)) // Output: true
console.log(fullHouse(hand5)) // Output: true
console.log(fullHouse(hand6)) // Output: false

// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind. (2 ms)


// const fullHouse = (array) => {
//     let count = 0
//     let countTwo = 0

//     // for(let i=0; i<array.length; i++) {
//     //     for(let j=i+1; j<array.length; j++) {
//     //         if(array[i] === array[j] && count < 4) {
//     //             count++;
//     //         } else {
//     //             countTwo++;
//     //         }
//     //     }
//     //     return count + " " + countTwo
//     // }
// }



// if(array[0] === array[1] || array[0] === array[2] || array[0] === array[3] || array[0] === array[4]) {
//     count++
// } else if(array[1] === array[2] || array[1] === array[3] || array[1] === array[4]) {
//     count++
// } else if (array[2] === array[3] || array[2] === array[4]) {
//     count++
// } else if((array[3] === array[4])) {
//     count++
// }