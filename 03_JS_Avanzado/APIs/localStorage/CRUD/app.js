$(function(){
    var operacion = "A"
    var indice_seleccionado = -1;
    var tbContactos = localStorage.getItem("tbContactos");
    tbContactos = JSON.parse(tbContactos);

    // Cada pagina de contactos esta limitada, por lo tanto iniciamos un vector(array) multidimensional

    if(tbContactos == null){
        tbContactos = [];
    }

    $("#agregarContacto").on("submit", function(){
        if(operacion == "A"){
            return Adicionar(tbContactos);
        } else {
            return Editar(tbContactos, indice_seleccionado);
        }
    })

    Listar(tbContactos);

    $("#tblListar").on("click", ".btnEditar", function(){
        operacion = "E";
        indice_seleccionado = parseInt($(this).attr("alt"));
            var cli = JSON.parse(tbContactos[indice_seleccionado]);
        $("#txtCodigo").val(cli.Codigo);
        $("#txtNombre").val(cli.Nombre);
        $("#txtTelefono").val(cli.Telefono);
        $("#txtEmail").val(cli.Email);
            $("#txtCodigo").attr("readonly", "readonly");
        $("#txtNombre").focus();
    });
    
    $("#tblListar").on("click", ".btnExcluir", function(){
        indice_seleccionado = parseInt($(this).attr("alt"));
            Excluir(tbContactos, indice_seleccionado);
        Listar(tbContactos);
    });
});

function Adicionar(tbContactos){
    var contacto = JSON.stringify({
        Codigo: $("#txtCodigo").val(),
        Nombre: $("#txtNombre").val(),
        Telefono: $("#txtTelefono").val(),
        Email: $("#txtEmail").val()
    });
    tbContactos.push(contacto);
    localStorage.setItem("tbContactos", JSON.stringify(tbContactos));
    alert("Contacto agregado.");
    return true;
}

function Editar(tbContactos, indice_seleccionado) {
    tbContactos[indice_seleccionado] = JSON.stringify({
        Codigo: $("#txtCodigo").val(),
        Nombre: $("#txtNombre").val(),
        Telefono: $("#txtTelefono").val(),
        Email: $("#txtEmail").val()
    });
    localStorage.setItem("tbContactos", JSON.stringify(tbContactos));
    operacion = "A";
    return true
}

function Excluir(tbContactos, indice_seleccionado){
    tbContactos.splice(indice_seleccionado, 1);
    localStorage.setItem("tbContactos", JSON.stringify(tbContactos));
    alert("Contacto excluido.");
}

function Listar(tbContactos){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>Codigo</th>"+
        "   <th>Nombre</th>"+
        "   <th>Telefono</th>"+
        "   <th>E-mail</th>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
    );
    for(var i in tbContactos){
        var cli = JSON.parse(tbContactos[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td><img src='./img/edit.png' width='30px' height='30px' alt='"+i+"'class='btnEditar'/><img src='./img/delete.png' width='30px' height='30px' alt='"+i+"' class='btnExcluir'/></td>");
        $("#tblListar tbody").append("<td>"+cli.Codigo+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Nombre+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Telefono+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}