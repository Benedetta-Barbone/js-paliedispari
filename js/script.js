

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