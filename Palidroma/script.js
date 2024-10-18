//Ex-Palidroma

// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
const insertWord = prompt('Inserisci una parola per verificare se è palindorma:');
// console.log(insertWord);


//Creo una funzione che determina se l'utente inserirà una parola palindroma
function isWord(string) {
    //converto la parola in minuscolo per evitare di avere problemi con min. e maiusc.
    let lowercaseWord = insertWord.toLowerCase();

    // inverto la parola
    let reverseWord = '';
    // Inverto il ciclo for in modo da poter partire dall'ultima lettera e procedere all'indietro (soluzione trovata cercando su internet).
    for (let i = lowercaseWord.length -1 ; i >= 0; i--) {
        reverseWord += lowercaseWord[i];
        // console.log(reverseWord);
    }
    // Confronto la parola originale con quella invertita
    return lowercaseWord === reverseWord;
}

// Inizio la verifica del risultato e lo stampo
if(isWord(insertWord)){
    console.log(`${insertWord} è una parola palindroma!`);
} else{
    console.log(`${insertWord} non è una parola palindroma!`)

};

// Verifico con un valore booleano
const word = isWord(insertWord);
console.log(`Risultato : ${word}`);

