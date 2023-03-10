
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