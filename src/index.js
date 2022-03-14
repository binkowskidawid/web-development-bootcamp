function getQuotes() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (quotes) {
      const randomQuote = Math.floor(Math.random() * quotes.length) + 1;
      // console.log(quotes[randomQuote]);
      const quoteText = quotes[randomQuote].text;
      const quoteAuthor =
        quotes[randomQuote].author !== null
          ? quotes[randomQuote].author
          : "Author unknown";

      document.getElementById("app").innerHTML = `
      <div class="h-screen bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2019/06/12/21/10/ocean-4270251_960_720.jpg')] flex flex-col items-center justify-center">
      <h1 class="py-6 text-center text-3xl md:text-5xl font-bold text-white">${quoteText}</h1>
      <p class="py-2 text-center text-white">${quoteAuthor}</p>
      </div>
      `;
    });
}

getQuotes();

//////////////////////////////////////////////////////////////

// const maxLength = 180;
// const name = prompt("Your name");
// let firstLetter = name.slice(0, 1).toUpperCase();
// let nameLetters = name.slice(1, name.length);

// alert(`Hello ${firstLetter}${nameLetters}`);

//////////////////////////////////////////////////////////////

// const dogAge  = prompt("Dog age")
// const humanAge = (((dogAge - 2) * 4) + 21)
// alert(`In human age your dog have ${humanAge}`)

//////////////////////////////////////////////////////////////

// function getMilk(dollars) {
//   let costOfOneBottle = 1.5;
//   let bottels = Math.floor(dollars / costOfOneBottle);
//   let change = dollars % costOfOneBottle;
//   console.log(
//     `If You have ${dollars}$, You can buy ${bottels} bottels of milk and You have ${change}$ change`
//   );
// }

// getMilk(5);

//////////////////////////////////////////////////////////////

// function bmiCalculator(weight, height) {
//   const bmi = Number((weight / Math.pow(height, 2)).toPrecision(3));
//   console.log(bmi);
//   if (bmi < 18.5) {
//     return `Your BMI is ${bmi}, so you are underweight.`;
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return `Your BMI is ${bmi}, so you have a normal weight.`;
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     return `Your BMI is ${bmi}, so you are overweight.`;
//   } else if (bmi >= 30 && bmi <= 34.9) {
//     return `Your BMI is ${bmi}, so you are obese.`;
//   } else if (bmi >= 35) {
//     return `Your BMI is ${bmi}, so you are extremely obese.`;
//   }
// }

// console.log(bmiCalculator(78, 1.79));

//////////////////////////////////////////////////////////////

// function isLeap(year) {
//   /**************Don't change the code above****************/

//   let divideByFour = year % 4 === 0;
//   let divideByOneHundred = year % 100 === 0;
//   let divideByFourHundred = year % 400 === 0;
//   let divideByOneHundredAndFourHundred =
//     divideByOneHundred === divideByFourHundred;
//   let checkDivide = divideByFour === divideByOneHundredAndFourHundred;
//   // console.log(divideByFour, divideByOneHundredAndFourHundred)

//   if (divideByFour && checkDivide) {
//     return "Leap year.";
//   } else {
//     return "Not leap year.";
//   }

//   /**************Don't change the code below****************/
// }

// console.log(isLeap(2022));

////////////////////////////////////////////////////////////

// const guestList = ["Dawid", "Daria", "Karol", "Piotrek", "Mosia", "Bilbo"];

// function checkGuest(guestName) {
//   guestName = prompt("What is Your name?")
//   guestList.includes(guestName)
//   ? console.log(`Welcome ${guestName} !!! Please come in.`)
//   : console.log(`Sorry ${guestName} We don't have You on Our guest list. Maybe next time. Bye !`)
// }

// checkGuest()

////////////////////////////////////////////////////////////

// let NumbersArray = [];
// let number = 0;

// function addNumberToArrayAndFizzBuzz(i) {
//   while (number < i) {
//     number++;
//     if (number % 3 === 0 && number % 5 === 0) {
//       NumbersArray.push("FizzBuzz");
//     } else if (number % 3 === 0) {
//       NumbersArray.push("fizz");
//     } else if (number % 5 === 0) {
//       NumbersArray.push("buzz");
//     } else {
//       NumbersArray.push(number);
//     }
//   }
//   console.log(NumbersArray);
// }

// addNumberToArrayAndFizzBuzz(15);

////////////////////////////////////////////////////////////

// function fizzBuzz(number) {
//   if(number % 3 === 0 && number % 5 === 0) {
//     return console.log("FizzBuzz")
//   } else if(number % 3 === 0) {
//     return console.log("fizz")
//   } else if(number % 5 === 0) {
//     return console.log("buzz")
//   } else {
//     return console.log(number)
//   }
// }

// fizzBuzz(35)

// function fizzBuzzOneHundred(howManyNumbers) {
//   for (let i = 1; i <= howManyNumbers; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz")
//     } else if(i % 3 === 0) {
//       console.log("fizz")
//     } else if(i % 5 === 0) {
//       console.log("buzz")
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzBuzzOneHundred(15)

/////////////////////////////////////////////////////

// function whosPaying(names) {
//   /******Don't change the code above*******/
//   let randomPerson = Math.floor(Math.random() * names.length);
//   return `${names[randomPerson]} is going to buy lunch today!`;
//   /******Don't change the code below*******/
// }

// console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));

/////////////////////////////////////////////////////

// let beers = 99;

// function ninetyNineBeer() {
//   while (beers >= 1) {
//     console.log(
//       `${beers} bottles of beer on the wall, ${beers} bottles of beer. Take one down and pass it around - ${
//         beers <= 1 ? "no more" : beers - 1
//       } bottles of beer on the wall.`
//     );
//     beers--;
//   }
// }

// ninetyNineBeer();

/////////////////////////////////////////////////////

// function fibbonaciSequence(n) {
//   let fibbonaciArray = [0, 1];
//   if (n <= 1) {
//     return fibbonaciArray.slice(0, 1);
//   } else if (n === 2) {
//     return fibbonaciArray;
//   } else if (n >= 3) {
//     for (let i = 1; i <= n - 2; i++) {
//       let nextNumber = fibbonaciArray[i] + fibbonaciArray[i - 1];
//       fibbonaciArray.push(nextNumber);
//     }
//   }
//   return fibbonaciArray;
// }

// console.log(fibbonaciSequence(6));

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
