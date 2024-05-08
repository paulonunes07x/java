function exibirMenu() {
    console.log ("----- Eleiição ---");
    console.log ("1) Canditado A")
    console.log ("2) Candidato B")
    console.log ("3) Candidato C")
    console.log ("4) Candidato D")
    console.log ("5) Voto nulo")
    console.log ("6) Encerrar votação")
}

let votosCanditadoA = 0;
let votosCanditadoB = 0;
let votosCanditadoC = 0;
let votosCanditadoD = 0;
let votosNulos = 0

function votacao(voto) {
    switch(voto) {
        case '1' :
            votosCanditadoA++;
            break;
        case '2' :
            votosCanditadoB++;
            break;
        case '3' :
            votosCanditadoC++;
            break;
        case '4' :
            votosCanditadoD;
            break;
        case '5' :
            votosNulos
            break;
        case '6' :
            exirResultados();
            process.exit(0)
            break;
        default:
            console.log("Opção Invalida")       
    

    }
}
function exirResultados() {
    console.log (" --- Resultados ---")
    console.log ("Canditado A:" + votosCanditadoA + "votos");
    console.log ("Canditado B:" + votosCanditadoB + "votos");
    console.log ("Canditado C:" + votosCanditadoC + "votos");
    console.log ("Canditado D:" + votosCanditadoD + "votos");
    console.log ("Votos Nulos:" + votosNulos + "votos");
}
function main() {
    while(true) {
        exibirMenu();
        let voto = prompt("Digite qual sera seu voto");
        votacao(voto);
    }
}
main();
// MEU PROMPT NAO ESTA FUNCIONANDO
// de acordo com a ju da previsao do tempo vai da bom, eu fiz o teste no navegador (eu so nao sei se vai aparecer os resultados)