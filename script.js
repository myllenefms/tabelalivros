function pegaDados(){    
    
    $.ajax({
        url: "./lista.json",
        data: "",
        success: function(retorno){
            tratarDados(retorno);
        },
        dataType: "html"
    })
}

function tratarDados(dados){

    dados = JSON.parse(dados);
    console.log(dados)

    var lista = $('.itens')
    
    $(dados).each(function(index,valor){
        
        
       let conteudo = `
                            <tr>
                                <th scope="row">${valor.id}</th>
                                <td>${valor.nome}</td>
                                <td>${valor.descricao}</td>
                                <td>
                                    <button type="button" class="btn btn-primary" onclick="abrirModal('${valor.imagem}', '${valor.nome}', '${valor.descricao}')">
                                        Detalhes
                                    </button>
                                </td>
                            </tr>`;

        lista.append(conteudo);
    })
}

function abrirModal(imagem, nome, descricao){

    let conteudo = `<div class="col-md-12">
                        <div class="card" >
                            <img src="${imagem}" class="card-img-top"  alt="tertertert">
                            <div class="card-body">
                            <h5 class="card-title">${nome}</h5>
                            <p class="card-text">${descricao}</p>
                        </div>
                        </div>
                    </div>`;

    $('.detalheLivro').html(conteudo)   

    $('#exampleModal').modal('show');

}


$(function(){
    pegaDados();
})
