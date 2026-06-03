let senha = "";

function salvarSenha(){
    senha = document.getElementById("senhaCriada").value;

    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function entrar(){

    
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

       
        conta = conta.replace(/\+/g,"-");

        let resultado = eval(conta);

        
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

    
    campo.value =
    campo.value.substring(
        0,
        campo.value.length / 2
    );
}

