


gbtnResumen=document.getElementById("btnResumen");

btnBorrar=document.getElementById("btnBorrar");

var valorTicket = 200;



var estudiante=80;
var trainee=50;
var junior=15;
 


//captura informacion de los inputs//
let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let mail=document.getElementById("mail");
let cantidad=document.getElementById("cantidad");
let categoria=document.getElementById("categoria");

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++){
        x[i].classList.remove("is-invalid");
    }

}

function total_a_pagar() {




    quitarClaseError();

    if(nombre.value==="")
    {
    alert("FALTA INGRESAR NOMBRE...");
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
    }


    if(apellido.value==="")
    {
    alert("FALTA INGRESAR APELLIDO...");
    apellido.classList.add("is-invalid");
    apellido.focus();
    return;
    }

  
    if(mail.value==="")
    {
    alert("FALTA INGRESAR MAIL...");
    mail.classList.add("is-invalid");
    mail.focus();
    return;
    }



//Para determinar si el mail es válido o no
const emailValido = mail =>{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
}

if (!emailValido(mail.value)){
    
    if(mail.value==="")
    {
    alert("El mail es incorrecto...");
    mail.classList.add("is-invalid");
    mail.focus();
    return;
    }
}




if ((cantidad.value<=0)   || (isNaN (cantidad.value))  ){

    
    
    alert("Error ingresar cantidad de Entradas");
    cantidad.classList.add("is-invalid");
    cantidad.focus();
    return;
    

}

if(categoria.value==="")
{
alert("FALTA SELECCIONAR CATEGORIA...");
categoria.classList.add("is-invalid");
categoria.focus();
return;
}


//MULTIPLICACION * VALOR ENTRADAS
let totalValorTickets=(cantidad.value)*valorTicket;

if(
    (categoria.value==0)
)

{
    totalValorTickets=totalValorTickets;
}

if (categoria.value ==1){

    totalValorTickets= totalValorTickets-(estudiante/100*totalValorTickets);
}
if (categoria.value ==2){

    totalValorTickets= totalValorTickets-(trainee/100*totalValorTickets);
}

if (categoria.value==3){

    totalValorTickets= totalValorTickets-(junior/100*totalValorTickets);
}


totalPago.innerHTML=totalValorTickets;

}
btnResumen.addEventListener("click",total_a_pagar);
btnBorrar.addEventListener("click",reset_total_a_pagar);

function reset_total_a_pagar(){
    quitarClaseError();
    totalPago.innerHTML="";
}





