obgNome = document.getElementById('txtNome')
obgEmail = document.getElementById('txtEmail')

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close");

function validaFormulario(){
    if ( obgNome.value == '' || obgEmail.value == '') {
        modal.style.display = "block";
    } 
}

function fechaModal(){
    modal.style.display = "none"
}
