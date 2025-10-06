/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

/*TOOLS
- prompt() per chiedere i dati all'utente
- parseInt() o parseFloat() per convertire gli input in numeri
- toFixed() per arrotondare il prezzo 

TASKS
- chiedere all'utente i chilometri da percorre
- chiedere l'eta all'utente
- calcolare il prezzo base
- applicare sconti
- formattare e stampare il prezzo finale con due decimali
*/

// 1. Chiedere input all'utente
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));

// 2. Prezzo base
const prezzoKm = 0.21;
let prezzoBase = km * prezzoKm;
