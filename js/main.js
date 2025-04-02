// Scrivi un programma che stampi i numeri da 1 a 100

// - per i multipli di 3 stampi "Fizz" al posto del numero
// - per i multipli di 5 stampi "Buzz" al posto del numero
// - per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero

// # SVOLGIMENTO

// per ogni numero che va da 1 a 100
for (let i = 1; i <= 100; i++) {
  // se i numeri sono sia multipli di 3 che multipli di 5 stampo "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    // altrimenti se i numeri sono solo multipli di 3 stampo "Fizz"
  } else if (i % 3 === 0) {
    console.log("Fizz");
    // altrimenti se i numeri sono solo multipli di 5 stampo "Buzz"
  } else if (i % 5 === 0) {
    console.log("Buzz");
    // altrimenti stampo il numero corrente
  } else {
    console.log(i);
  }
}
