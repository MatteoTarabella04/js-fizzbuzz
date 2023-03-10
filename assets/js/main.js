
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






// creo un ciclo che scorra i numeri da 1 a 1000
for (let i = 1; i <= 1000; i++) {

   // scorro tra i numeri e individuo i multipli di 3 di 5 e di entrambi
   switch (true) {
      default:
         console.log(i);
      break;

      case i % 3 == 0 && i % 5 == 0:
         console.log(i + ' multiplo di 3 e di 5');
      break;

      case i % 3 == 0:
         console.log(i + ' multiplo di 3');
         break;

      case i % 5 == 0:
         console.log(i + ' multiplo di 5');
   }
}