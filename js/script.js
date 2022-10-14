// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


// Data una lista della spesa
const list = ['mele', 'pere', 'latte', 'uova', 'yogurt', 'cereali', 'zucchero']

// ciclo while - scorri la lista finchè non finisce, quindi per tutta la sua lunghezza
let i = 0;

while (i < list.length) {
    const result = document.querySelector(".shopping-list");
    console.log(result);
    
    // output - stampa la lista
    result.innerHTML += `<li>${list[i]}</li>`;   
    
    i++;
}

