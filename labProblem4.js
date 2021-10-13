/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

// // //CODE HERE
// let lovesCode = true
// if (lovesCode === true) {
//     console.log("I love to code!")
// }
// else if (lovesCode !== true){
//     console.log("Coding has its challenges.")
// }
// // For problems 2-3 use the following lines of code:

// var amysAge = 31
// var brittanisAge = 29
// var amysBirthYear = 1991
// var brittanisBirthYear = 1987
// ////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. 
  Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
// if (amysAge < brittanisAge) {
//     console.log("Brittani is older!")
// }
//     else if (brittanisAge < amysAge) {
//         console.log("Amy is older!")
//     }
//     else {
//         console.log("They are the same age.")
//     }
// ////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

//CODE HERE
// if (amysBirthYear === brittanisBirthYear){
//     console.log("Amy & Brittani were born in the same year")
// }
//     else {
//         console.log ("Amy & Brittani were not born in the same year")
//     }
////////// PROBLEM 4 //////////

let temperature = 55
let rain = true

/*
  Using an if statement and a comparison operator, 
  create code that will log a suggestion on what type of clothes one should wear for the day, 
  based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. 
  If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. 
  If it is 60 degrees or below, one should wear a jacket and carry an umbrella. 
  Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

//CODE HERE

//
if (rain === true && temperature <= 60 ) {
    console.log("Wear jacket and take an umbrella.")
} else if (rain === true && temperature > 60 && temperature < 80 ) {
    console.log("Take an umbrella and wear a long sleeve shirt.")
} else if (rain === true && temperature >= 80) {
    console.log("Take an umbrella, but not a jacket.")
} 
else if (rain !== true && temperature <= 60 ) {
    console.log("Wear a jacket.")
} else if (rain !== true && temperature > 60 && temperature < 80 ) {
    console.log("Wear a long sleeve shirt.")
} else if (rain !== true && temperature >= 80) {
    console.log("Wear some shades.")
} 