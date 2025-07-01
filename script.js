function mostrarAlerta(){
    alert("Formulário enviado com sucesso!");
    return false;
}

function validarAcesso(){
    const usuario = document.getElementById('user').value;
    const senha = document.getElementById('password').value;
    
    if (usuario !== "1234" || senha !== "12341234"){
        alert("Dados invalidos. Tente novamente.");
        return false
    }else{
        return true
    }
}

function validarFormulario(){
    /*
    const nome = document.getElementById("name").value;
    const sobrenome = document.getElementById("lName").value;
    const idade = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const telefone = document.getElementById("phone").value;

    Ainda necessario anlisar quais campos precisam de validação especifica como formato ou elementos inseridos
    ja que apenas não estar em branco já é realizado nos proprios campos com o elemento required.

    */
   return true
}