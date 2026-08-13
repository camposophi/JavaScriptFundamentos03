function apresentar(nome){
    console.log("Olá," + nome);
}

apresentar ("Sophia");

function sistema(nome = "Visitante"){
    console.log("Olá," + nome);
}

sistema();
sistema("Sophia");

function somar(numero1, numero2){
    console.log(`${numero1} + ${numero2} = numero1 + numero2`);
}

somar(10,5);