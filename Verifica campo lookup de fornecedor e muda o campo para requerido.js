async function OnSaveFornecedorObrigatorio(context) {
  var formContext = context.getFormContext();
  var fornecedor = formContext.getAttribute("js_fornecedor")?.getValue()[0];
  var tipoAtendimento = formContext.getAttribute("js_tipo_atendimento").getValue();
  var fornecedorCadastrado = formContext.getAttribute("js_fornecedor_cadastrado").getValue();
  var tipoFornecedor = formContext.getAttribute("js_tipo_fornecedor");
  var nomeEmpresa = formContext.getAttribute("js_nome_empresa");

  if (tipoAtendimento == 5) {
    if (fornecedor == null || fornecedor.length == 0) {
      formContext.ui.setFormNotification("Abertura Direta de Reclamação é obrigatório ser preenchido o campo de Fornecedor", "ERROR");
      context.getEventArgs().preventDefault();
    } else {
      let result = await Xrm.WebApi.retrieveRecord(fornecedor.entityType, fornecedor.id, "?$select=js_abertura_direta_reclamacao");

      if (result.procon_abertura_direta_reclamacao != true) {
        formContext.ui.setFormNotification("O fornecedor selecionado não permite Abertura Direta de Reclamação", "ERROR");
        context.getEventArgs().preventDefault();
      }

    }
  } else if (tipoAtendimento != 1) {
    if (fornecedorCadastrado == true) {
      fornecedor.setRequiredLevel("required");
    } else {
      fornecedor.setRequiredLevel("none");
      tipoFornecedor.setRequiredLevel("required");
      nomeEmpresa.setRequiredLevel("required");
    }
  }
}
//O publicador do projeto foi alterado
