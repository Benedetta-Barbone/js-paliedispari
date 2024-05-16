

function palidroma(parola){
  parolaInvertita = parola.split('').reverse().join('');
  return parola === parolaInvertita;
}
const parola = prompt('inserisci una parola');

if (palidroma(parola)){
  console.log('è un palidroma')
}else{
  console.log('non è un palidroma')
}




function numeroRandom() {
  Math.floor(Math.random() * 5 + 1);
}


function sommaNumeri (num1, num2){
  let somma = num1 + num2
  if (somma % 2 === 0){
    return 'pari'
  }else{
    return 'dispari'
  }
}


const pariDispari = prompt('Scegli pari o dispari');
const userNumber = Number.parseInt(prompt('inserisci un numero da 1 a 5'), 10);
const computerNumber = numeroRandom();


if (sommaNumeri(userNumber, computerNumber)==pariDispari){
  console.log('hai vinto')
}else{
  console.log('hai perso')
}