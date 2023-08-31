
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




let mapa = L.map('map').setView([-34.7675, -58.64278],15)                          //longitud   //latitud
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?',{}).addTo(mapa)

   




$(document).ready(function(){

  $('#geo').click(function(){
      if (!!navigator.geolocation){
          navigator.geolocation.getCurrentPosition(
              function(position){
                  console.log('latidud= '+position.coords.latitude + 'longitud= ' +position.coords.longitude)
                  let latitud = position.coords.latitude
                  let  longitud= position.coords.longitude
                ashe(latitud, longitud) 
              },
              function(){
                  alert('No se permitio el acceso a la position')
              }
          )
      }
  });
});


function ashe(latitud,longitud){



let cafeteria = L.latLng(-34.7735651,-58.6485321)
let yo = L.latLng(-34.7795451,-58.6344122)
let distancia = cafeteria.distanceTo(yo)

let distanciaKmtrs = distancia / 1000
mapa.setView([latitud,longitud],16)
mapa.setView([latitud,longitud],17)

console.log('la distancia es de:'+distancia)
console.log(distanciaKmtrs)
console.log(distanciaKmtrs.toFixed(1))
console.log(parseInt(distancia / 1000))

}




document.getElementById('select-location1').addEventListener('click',function(e){
  let coords = e.target.value.split(',');
  mapa.flyTo(coords,15)
 
    const miUbicacion = L.marker(coords).addTo(mapa)
    miUbicacion.bindPopup('Cafeteria').openPopup();
 
 

const circulo = L.circle(coords,{radius:100}).addTo(mapa)
})


document.getElementById('select-location2').addEventListener('click',function(e){
  let coords = e.target.value.split(',');
  mapa.flyTo(coords,15)
 
    const cafeteria = L.marker(coords).addTo(mapa)
    cafeteria.bindPopup('Mi ubicacion').openPopup();
 
 

const circulo = L.circle(coords,{radius:100}).addTo(mapa)
})






var marcadorCafeteria = L.marker([-34.7735651,-58.6485321]).addTo(mapa)

marcadorCafeteria.bindPopup('Cafeteria').openPopup();

const circulo = L.circle([-34.7735651,-58.6485321],{radius:100}).addTo(mapa)






