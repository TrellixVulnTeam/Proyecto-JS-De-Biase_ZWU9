

fetch("https://rickandmortyapi.com/api/character/1,2")
    .then((resp) => resp.json())
    .then((data)=> {
    
    let rick = data[0].name    
    let rickImagen = data[0].image
    let morty = data[1].name    
    let mortyImagen = data[1].image
    

    let tarjeta1 = document.getElementById("tarjeta1")
    let tarjeta2 = document.getElementById("tarjeta2")
    let tarjeta3 = document.getElementById("tarjeta3")
    let tarjeta4 = document.getElementById("tarjeta4")

    function premio(){
        let numero = Math.random() * 2
        if(numero > 0.5 ){
            Swal.fire({
                title: "GANASTE UN PREMIO!",
                text: "Felicitaciones, ganaste un codigo de descuento! Codigo: 2020020",
                imageUrl:`${rickImagen}`,
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
                
              }).then(function() {
                window.location = "http://127.0.0.1:5500/carrito.html";
            });
            
        }
        if(numero < 0.5){
            Swal.fire({
                title: "MEJOR SUERTE LA PROXIMA!",
                text: "Lastimosamente no ganaste un premio :C",
                imageUrl:`${mortyImagen}`,
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
                
            }).then(function() {
                window.location = "http://127.0.0.1:5500/index.html";
            });
        }
    }


    tarjeta1.addEventListener("click", ()=>{
        premio()
    })
    tarjeta2.addEventListener("click", ()=>{
        premio()
    })

    tarjeta3.addEventListener("click", ()=>{
        premio()
    })

    tarjeta4.addEventListener("click", ()=>{
        premio()
    })


})


