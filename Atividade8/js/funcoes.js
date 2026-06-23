function soma(){
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado
}

function salvarHistorico() {
    /*
        Hisórico de função utilizada
        Ex -> Função: soma

        Histórico de números digitados
        Ex -> Primeiro numero: 10, SegundoNumero: 10

        Histórico de resultados obtidos:
        Ex -> 20

        apresentado num console.log
    */
}