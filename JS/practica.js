setInterval(function(){
    const date = new Date()
    hora.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    fecha.innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  },1000);
  
  function cargarEjemplo(){
        document.getElementById("numerosEjem").value="6,99,56,15,68";
         }
  function reiniciar(){
    location.reload();
  }
  function calcular(){
    let valores_array=document.getElementById("numerosEjem").value.split(/,/);
    let mayor= -Infinity;
    let menor= +Infinity;
    let suma=0;
    let promediar=0;
    //sumar
    for(let i=0;i<valores_array.length;i++){
      suma=parseInt(valores_array[i])+suma;
    }
    //obtener el mayor
    for(let i=0;i<valores_array.length;i++){
      if(parseInt(valores_array[i])>mayor) mayor=valores_array[i];
    }
    // obtener el menor
    for(let i=0;i<valores_array.length;i++){
      if(parseInt(valores_array[i])<menor) menor=valores_array[i];
    }
    document.getElementById("Resultado").innerHTML="la suma es : "+ suma+"<br>"+
                                                  "el mayor numero es:"+ mayor+"<br>"+
                                                  "el menor numero es:"+ menor;
  
  }           
  //=============================================
  setInterval(muestraFrase,2000);
  let frases=["Solo sé que nada sé","El que la persigue la consigue","El que estudia triunfa","Dime con quien andas y te dire quien eres"];
  
  let indice=0;
  function muestraFrase(){
      indice++;
      if(indice>=frases.length){
         indice=0;
      }
      document.getElementById("frases").innerHTML=frases[indice];
  }
  //=================================
  let colores=[];
  function agregaColor(evt){
    evt.preventDefault();
    let nom=document.getElementById("colores").value;
    if(nom==""){
       alert("El campo no puedo estar vacio");
    } else if(!existeNombre(nom)){
      let opcion = "<li>"+nom+"</li>";
      let lista=document.getElementById("listaC");
  
      lista.innerHTML+=opcion;
      colores.push(nom);
  
    }else{
      alert("El color existe");
    }
  
  }
  function existeNombre(nombre){
           // busca nombre
           for(let i=0;i<colores.length;i++){
               const elemento=colores[i];
               if(elemento.trim().toLowerCase()===nombre.trim().toLowerCase()){
                   return true;
               }
           }
            return false;
           }
  //====================================================
  //cronometro
  document.addEventListener("DOMContentLoaded", () => {
      const $tiempoTranscurrido = document.querySelector("#tiempoTranscurrido"),
          $cisnerosIniciar = document.querySelector("#Iniciar"),
          $cisnerosPausar = document.querySelector("#Pausar"),
          $cisnerosDetener = document.querySelector("#Detener");
      let	idInterval =[],
          tiempoInicio = null;
      let diferenciaTemporal = 0; 
   
      const ocultarElemento = elemento =>{
          elemento.style.display = "none";
      }
  
      const mostrarElemento = elemento => {
          elemento.style.display = "";
      }
  
      const aumentarCero = valor => {
          if (valor < 10) {
              return "0" + valor;
          } else {
              return "" + valor;
          }
      }
      const milisegundosAMinutosYSegundos = (milisegundos) => {
          const minutos = parseInt(milisegundos / 1000 / 60);
          milisegundos -= minutos * 60 * 1000;
          segundos = (milisegundos / 1000);
          return `${aumentarCero(minutos)}:${aumentarCero(segundos.toFixed(1))}`;
      };
      const iniciarStart = () => {
          const ahora = new Date();
          tiempoInicio = new Date(ahora.getTime() - diferenciaTemporal);
          clearInterval(idInterval);
          idInterval = setInterval(refrescarTiempo, 100);
          ocultarElemento($cisnerosIniciar);
          ocultarElemento($cisnerosDetener);
          mostrarElemento($cisnerosPausar);
      };
      const pausarPause = () => {
          diferenciaTemporal = new Date() - tiempoInicio.getTime();
          clearInterval(idInterval);
          mostrarElemento($cisnerosIniciar);
          ocultarElemento($cisnerosPausar);
          mostrarElemento($cisnerosDetener);
      };
      const refrescarTiempo = () => {
          const ahora = new Date();
          const diferencia = ahora.getTime() - tiempoInicio.getTime();
          $tiempoTranscurrido.textContent = milisegundosAMinutosYSegundos(diferencia);
      };
      const detenerHaving = () => {
          if (!confirm("¿Quiere reiniciar su tiempo?")){
              return;
          }
          clearInterval(idInterval);
          init();
      idInterval =[];
          diferenciaTemporal = 0;
      }
  
      const init = () => {
          $tiempoTranscurrido.textContent = "00:00.0";
          ocultarElemento($cisnerosPausar);
          ocultarElemento($cisnerosDetener);
      };
      init();
  
      $cisnerosIniciar.onclick = iniciarStart;
      $cisnerosPausar.onclick = pausarPause;
      $cisnerosDetener.onclick = detenerHaving;
  });