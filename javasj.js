
let senha = "";

function salvarSenha(){
    senha = document.getElementById("senhaCriada").value;

    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function entrar(){

    // ERRO 1:
    // entra com qualquer senha

    document.getElementById("login").style.display = "none";
    document.getElementById("calculadora").style.display = "block";
}

function add(valor){
    document.getElementById("resultado").value += valor;
}

function calcular(){

    try{

        let conta =
        document.getElementById("resultado").value;

        // ERRO 3:
        // + vira -

        conta = conta.replace(/\+/g,"-");

        let resultado = eval(conta);

        // ERRO 5:
        // multiplicação acima de 100
        // perde 1 no resultado

        if(conta.includes("*") && resultado > 100){
            resultado--;
        }

        document.getElementById("resultado").value =
        resultado;

    }
    catch{
        alert("Erro");
    }
}

function limpar(){

    let campo =
    document.getElementById("resultado");

    // ERRO 2:
    // apaga apenas metade

    campo.value =
    campo.value.substring(
        0,
        campo.value.length / 2
    );
}