var alumnos=[{
    nombre: "marco",
    email: "mar@goki.com",
    materias: "fisica"
},{
    nombre: "cofla",
    email: "cofla@goki.com",
    materias: "fisica 4"
},{
    nombre: "goku",
    email: "maru@goki.com",
    materias: "matematicas"
},{
    nombre: "maria",
    email: "epe@goki.com",
    materias: "filosofia"
},{
    nombre: "juan",
    email: "noo@goki.com",
    materias: "fisica 2"
}];

const btm=document.querySelector(".btm");
const htmlcode=document.querySelector(".grid-conteirner");
let codeHtml= "";
for (const key in alumnos) {
    let data = alumnos[key];
    let nombre = data.nombre;
    let email = data.email;
    let materias = data.materias;
     codeHtml += `
                    <div class="styles nombre">${nombre}</div>
                    <div class="styles email">${email}</div>
                    <div class="styles materias">${materias}</div>
                    <div class="styles semana">
                        <select class="semanas_elegir">
                            <option value="semana 1">semana 1</option>
                            <option value="semana 2">semana 2</option>
                        </select>
                    </div>
                `

}

htmlcode.innerHTML = codeHtml;


btm.addEventListener("click", ()=>{
    let confirmar=confirm("Estas seguro de que quieres confirmar las mesas?");
    if (confirmar) {
        document.body.removeChild(btm);
        let element = document.querySelectorAll(".semana");
        let option = document.querySelectorAll(".semanas_elegir");

        for (let key in element) {
            let semana= element[key];
            semana.innerHTML =option[key].value;
          
        }
    }
})
    
    