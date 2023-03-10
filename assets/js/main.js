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

// seleziono l'elemento div con classe row
//const divElement = document.querySelector('div.row');




/* 

// creo un ciclo che scorra i numeri da 1 a 1000
for (let i = 1; i <= 101; i ++) {

   // creo il box dove andranno inseriti gli elementi
   const boxElement = document.createElement('div');

   
   divElement.innerHTML += `
   <div class="col">
   <div class="box d-flex align-items-center justify-content-center">
   </div>
   </div>`

   // seleziono le box
   const boxNumElement = document.querySelector('box')
   
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

   boxElement.append(boxNumElement);
} */


const containerEl = document.querySelector(".container");

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
         break;

      case i % 3 == 0:
         console.log(i + ' multiplo di 3');
         break;

      case i % 5 == 0:
         console.log(i + ' multiplo di 5');
   }

   boxElement.classList.add("box");
   containerEl.append(boxElement);

}