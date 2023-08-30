
const buttonTheme = document.getElementById('buttonTheme')
const redondoTheme = document.getElementById('redondoTheme')

/*body*/ 
const body = document.getElementById('body')

/*menu desplegable*/
const menuDesplegable = document.getElementById('menuDesplegable')

/*boton menu*/ 
const buttonMenu = document.getElementById('buttonMenu')


redondoTheme.addEventListener('click',()=>{
    moverFuncion()
})



function moverFuncion(){
     /*TEMA EN NEGRO*/ 
    redondoTheme.style.left= '72%'
    redondoTheme.style.transition= '2s'
    redondoTheme.style.backgroundColor='rgb(146, 146, 146)'

    /*button theme*/
    buttonTheme.style.backgroundColor='black'
   
    /*body*/
    body.style.backgroundColor='#454545' 
    body.style.color='#F9F5F6' 
    body.style.transition= '1s'

  
    

 
   
      menuDesplegable.style.backgroundColor='#272829'

console.log(redondoTheme.offsetLeft)
        /*TEMA EN BLANCO*/ 
    if(redondoTheme.offsetLeft == 194){
        redondoTheme.style.left= '51%'
        redondoTheme.style.backgroundColor='white'

        buttonTheme.style.backgroundColor='rgb(146, 146, 146)'
            /*body*/
        body.style.backgroundColor='#F9F5F6' 
        body.style.transition= '2s'
        body.style.color= 'black'
 
  

      menuDesplegable.style.backgroundColor='rgb(233, 233, 233)'

       }
}


/*boton menu  60px*/ 

let boton = false

buttonMenu.addEventListener('click',()=>{
if(boton==false){
  openMenu()
  boton = true
}
else{
  closeMenu()
  boton = false
}

})


menuDesplegable.style.display='none'

function openMenu(){
  menuDesplegable.style.display='block'
  menuDesplegable.style.left='26%'

}
 
function closeMenu(){

  menuDesplegable.style.display='none'

}
//Geo localizacion

$(document).ready(function(){

  $('#geo').click(function(){
      if (!!navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
              function(position){
                  console.log('latidud= '+position.coords.latitude + 'longitud= ' +position.coords.longitude)
                  let latitud = position.coords.latitude
                  let  longitud= position.coords.longitude
                  procesarUbicacion(latitud, longitud)
                  ashe(latitud, longitud)
              },
              function(){
                  alert('No se permitio el acceso a la position')
              }
          )
      }
  });
});

function procesarUbicacion(latitud, longitud) {
  // Aquí puedes trabajar con latitud y longitud en la función procesarUbicacion
  console.log('Usando latitud = ' + latitud + ', longitud = ' + longitud);
  // ...hacer algo más con los datos...
}


                                    //longitud   //latitud
const mapa = L.map('map').setView([-34.7675,-58.64278],15)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?',{}).addTo(mapa)

function ashe(latitud,longitud){
  const puntosDeInteres = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "bindPopup": "casa"
        },
        "geometry": {
          "coordinates": [
            latitud,
            longitud
          ],
          "type": "Point",
       
        }
      }
    ]
  } 
 // alert('latidud='+latitud)
 // alert('longitud'+longitud)
  L.geoJson(puntosDeInteres,{}).addTo(mapa)
 puntosDeInteres.bindPopup('Hola ashee').openPopup();
}


//L.geoJson(areaPedidos,{}).addTo(mapa)








var marcador = L.marker([-34.7735651,-58.6485321]).addTo(mapa)

marcador.bindPopup('Hola ashee')

const circulo = L.circle([-34.7735651,-58.6485321],{radius:200}).addTo(mapa)

/*function clickSobreMapa(e){
console.log(e)
alert(e.latlng)
};

mapa.on('click',clickSobreMapa)
*/



