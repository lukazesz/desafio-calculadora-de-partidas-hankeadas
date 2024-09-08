let vitorias = 211
let derrotas = 43
let resultado = subtracao(vitorias, derrotas)

console.log("O jogador venceu um total de  " + resultado + " partidas rankeadas!")

function subtracao(vitorias, derrotas){
    let resultadoFinal = vitorias - derrotas
    return resultadoFinal
}

if(vitorias < 10){
    console.log("Ele esta na clase Bronze!");
}else if(vitorias > 10 && vitorias < 21){
    console.log("Ele esta na classe Ferro!");
}else if(vitorias > 20 && vitorias < 51){
    console.log("Ele esta na clase Prata!");
}else if(vitorias > 50 && vitorias < 81){
    console.log("Ele esta na clase Ouro!");
}else if(vitorias > 80 && vitorias < 91){
    console.log("Ele esta na clase Diamante!");
}else if(vitorias > 90 && vitorias < 101){
    console.log("Ele esta na clase Lendário!");
}else if(vitorias >= 101){
        console.log("Ele esta na clase Imortal!");
}else{
    console.log("Não foi possível identificar a classe do jogador!")
}

    