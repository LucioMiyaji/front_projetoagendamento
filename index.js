function autenticar(){
    // passo 1 - recuperar os dados digitados no formulario
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;
    console.log("DEBUG = digitados: "+txtLogin +" / "+ txtSenha);
    
    // passo 2 - montar o objeto de requisicao para o back-end
    var msgBody = {
        email : txtLogin,
        racf  : txtLogin,
        senha : txtSenha
    };

    // passo 3 - montar o cabecalho da requisicao
    var cabecalho = {
        method : "POST",
        body   : JSON.stringify(msgBody),
        headers : {
            "content-type" : "application/json"
        }
    };

    // passo 4 - enviar a requisicao para o back-end
    fetch("http://localhost:8080/login", cabecalho).then(resposta => console.log(resposta));
}