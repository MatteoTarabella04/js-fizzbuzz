/*
// creo l'elemeno main da inserire nel DOM
const mainElement = document.createElement("main");
console.log(mainElement);

// prendo l'elemento body dal DOM
const bodyElement = document.querySelector('body');

// colloco l'elemento main dopo l'elemento body
bodyElement.insertAdjacentElement('afterbegin', mainElement);

// creo l'elemento div che sarà un container da inserire nel main
const divContainerElement = document.createElement('div');
divContainerElement.classList.add('container');
divContainerElement.classList.add('w-50');

mainElement.append(divContainerElement);

*/


const containerElement = document.querySelector(".container");

for (let i = 1; i < 101; i++) {
   const boxElement = document.createElement("div");
   boxElement.style.fontSize = ('1.5rem');
   boxElement.style.fontWeight = ('bold');

   switch (true) {
      default:
         console.log(i);

         boxElement.append(i)
         boxElement.style.backgroundColor = ("#0d6efd");
         
         break;

      case i % 3 == 0 && i % 5 == 0:
         console.log(i + ' multiplo di 3 e di 5');

         boxElement.append('FizzBuzz')
         boxElement.style.backgroundColor = ("#f14165");

         break;

      case i % 3 == 0:
         console.log(i + ' multiplo di 3');

         boxElement.append('Fizz')
         boxElement.style.backgroundColor = ("#48ffaf");
         break;

      case i % 5 == 0:
         console.log(i + ' multiplo di 5');

         boxElement.append('Buzz')
         boxElement.style.backgroundColor = ("#ffda3e");
   }

   boxElement.classList.add("box");
   containerElement.append(boxElement);

}