
const input_busqueda= document.getElementById("input_busqueda"); 
const contener= document.getElementById("contener"); 
const contener2= document.getElementById("contenedor");
const conector= document.getElementById("conector");
const logo= document.getElementById("logo");
const contenido= document.getElementsByTagName("p");
const busc=document.querySelectorAll("H3");

let f,data,buscar
let array=[];
let cajon=[];


var Cont=contener2.innerHTML


logo.addEventListener("click",(e)=>{                                           //    ACCION Cuando hacemos click en el icono de busqueda
    input_busqueda.classList.add("acced");
    contener.classList.add("acced2");
    logo.classList.remove("color");

                                                  //Accion cuando scroll la pagina
        setTimeout(()=>{
                                                               
            
            addEventListener("scroll",(e)=>{                                              
            input_busqueda.classList.remove("acced");
            logo.classList.add("color");
            })
        },20000)
     
   
    
});                                                                               
                                                                            //   Accion finalizada
var c=[];

input_busqueda.addEventListener("change", function(){
    buscar=input_busqueda.value;

   if (buscar.length!=0) {
    contener2.classList.add("cont");
    conector.classList.add("stylCont");
    contener2.classList.remove("time");
    conector.classList.remove("stylCont0");

    var refe=new RegExp(buscar, "sgi");
    
    busc.forEach((e,i) => {
        
     f=refe.exec(e.innerHTML)
 
         if (f!=null) {
             
             array.push(e.innerHTML);
             data=f.input;
             if(data==e.innerHTML) {
              cajon.push(e);
              
             }
             
        }
        
       
    });

    if (array.length==0) {
     contener2.innerHTML=`${contener2.innerHTML}<div class="error">No existe</div><br>`;
        
    }
     for (let i = 0; i < array.length; i++) {
          
         if (array[i]!=i){
          
             if (cajon[i]!=i) {
                
                cajon[i].classList.add("box");
                
                contener2.innerHTML=`${contener2.innerHTML}<br><a class="text" href="#buscar${[i]}">${cajon[i].innerHTML}</a>`;
                cajon[i].setAttribute("id",`buscar${[i]}`);
                
             }
            
         }
       
     }
   }
 });

                                                                           //   Accion finalizada
 input_busqueda.addEventListener("keyup",()=>{
    if (input_busqueda.value.length==0) {
        contener2.classList.add("time");
        conector.classList.remove("stylCont");
        conector.classList.add("stylCont0");
        


        contener2.classList.remove("cont");
        array=array.slice(array.length);
        cajon=cajon.slice(cajon.length);
      
       busc.forEach((e)=>{
        e.removeAttribute("id");
        e.removeAttribute("class");
       contener2.innerHTML=Cont;
    })
    }
});

                                                                            //   Accion finalizada


