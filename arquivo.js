let v = 156
let d = 43

function calculadoraDeVitorias(x, y) {
    let resultadoFinal = x - y
    return resultadoFinal
}

let vitorias = calculadoraDeVitorias(v, d)

if(vitorias < 10){
    console.log("O Herói tem o saldo de " + vitorias + " está no nível de Bronze!");
}else if(vitorias > 10 && vitorias < 21){
    console.log("O Herói tem o saldo de " + vitorias + " está no nível de Ferro!");
}else if(vitorias > 20 && vitorias < 51){
    console.log("O Herói tem o saldo de " + vitorias + " está no nível de Prata!");
}else if(vitorias > 50 && vitorias < 81){
    console.log("O Herói tem o saldo de " + vitorias + " está no nível de Ouro!");
}else if(vitorias > 80 && vitorias < 91){
    console.log("O Herói tem o saldo de " + vitorias + " está no nível de Diamante!");
}else if(vitorias > 90 && vitorias < 101){
    console.log("O Herói tem o saldo de " + vitorias + " está no nível de Lendário!");
}else if(vitorias >= 101){
        console.log("O Herói tem o saldo de " + vitorias + " está no nível de Imortal!");
}

    