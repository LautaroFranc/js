const nombre = document.getElementById('nombre');
const email = document.getElementById('Email');
const materias = document.getElementById("materias");
const btm = document.getElementById("btm");
const resultado= document.querySelector(".result");

btm.addEventListener("click",(e)=>{
    
    let error =validarCamp();
    if (error[0]) {
        resultado.innerHTML=error[1];
        resultado.classList.add("error");
        resultado.classList.remove("success")
    }else {
        resultado.innerHTML="Sulicitud enviada";
        resultado.classList.add("success");
        resultado.classList.remove("error");
        }
})

const validarCamp = ()=>{
let error =[];
if (nombre.value.length <5) {
    error[0]=true;
    error[1]="El nombre no puede contener menos de 5 caracteres";
    return error;

}else if (nombre.value.length>40){
    error[0]=true;
    error[1]="El nombre no puede contener menos de 40 caracteres";
    return error;

}else if (  email.value.length<5 ||
            email.value.length>40||
            email.value.indexOf("@")== -1 ||
            email.value.indexOf(".")== -1){

                error[0]=true;
                error[1]="El email no es valido"
                return error;
            }
error[0]=false;
return error;
}