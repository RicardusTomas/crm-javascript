function validarEmail(executionContext) {
    // Obtenha o contexto do formulário
    var formContext = executionContext.getFormContext();

    // Obtenha o valor do campo de e-mail
    var email = formContext.getAttribute("emailaddress1").getValue();

    // Verifique se o valor do campo de e-mail é válido
    if (email && !isEmailValido(email)) {
        // Se o e-mail não for válido, exiba um aviso ao usuário
        formContext.getControl("emailaddress1").setNotification("Por favor, insira um endereço de e-mail válido.");
    } else {
        // Se o e-mail for válido, limpe o aviso
        formContext.getControl("emailaddress1").clearNotification();
    }
}

// 2. Crie uma função para verificar se um endereço de e-mail é válido
function isEmailValido(email) {
    // Use uma expressão regular para verificar se o e-mail é válido
    var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}
