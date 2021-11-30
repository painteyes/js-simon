const numberArray = [];
const userNumberArray = [];
let rightUserNumbers = [];

while (numberArray.length < 5) {

    const number = (getRandomInt(1, 100));
   
    if (!numberArray.includes(number)) {
        numberArray.push(number);
    } 
}

const [numberOne, numberTwo, numberThree, numberFour, numberFive] = numberArray;

console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);
console.log(numberFour);
console.log(numberFive);

// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
alert(numberOne); 
alert(numberTwo);
alert(numberThree);
alert(numberFour);
alert(numberFive);

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
const clock = setTimeout (

    function() {

        while (userNumberArray.length < 5) {
            const userNumber = parseInt(prompt('Inserisci i numeri uno alla volta'));
            userNumberArray.push(userNumber);
        }

        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        userNumberArray.forEach(
            (element) => {
                if (numberArray.includes(element) && !rightUserNumbers.includes(element)) {
                    rightUserNumbers.push(element) ; 
                }
            }
        )
        
        if (rightUserNumbers.length === 0) {
            alert ('Mi dispiace, non hai preso neanche mezzo numero')
        } else if (rightUserNumbers.length === 1) {
            alert('Puoi fare meglio, hai preso solo: ' + rightUserNumbers.length + ' numero: ' + [...rightUserNumbers]);
        } else if (rightUserNumbers.length <= 3) {
            alert('Puoi fare meglio, hai preso solo: ' + rightUserNumbers.length + ' numeri: ' + [...rightUserNumbers]);
        }
        else if (rightUserNumbers.length <= 4) {
            alert('Bravo, hai preso ' + rightUserNumbers.length + ' numeri: ' + [...rightUserNumbers]);
        } else {
            alert('Pazzesco, hai preso tutti e ' + rightUserNumbers.length + ' i numeri: ' + [...rightUserNumbers]);
        }
    }
    , 30000
);

// Funzioni ---------------------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}





