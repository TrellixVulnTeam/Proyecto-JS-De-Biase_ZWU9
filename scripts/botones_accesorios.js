class Accesorios {
    constructor(producto, precio){
        this.producto = producto
        this.precio = precio       
    }
}

let id_7 = new Accesorios ("Cargador", 15000)
let id_8 = new Accesorios ("Auriculares nokia", 2000)
let id_9 = new Accesorios ("Cargador samsung", 12000)
let id_10 = new Accesorios ("Auriculares x", 6000)
let id_11 = new Accesorios ("Cargador y", 4000)
let id_12 = new Accesorios ("Auriculares z", 8000)

//alerta de se agrego el producto
function alerta(){
    Toastify({
        text:"Producto agregado",
        duration: 3000,
        style:{
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast()
}

//funcion que guarda el producto en el localStorage para el carrito
function guardar(elementoAGuardar, clave){
    let a = JSON.stringify(elementoAGuardar)
    localStorage.setItem(clave, a)
}

//eventos para la seleccion de productos
let botonCarrito1 = document.getElementById("7")
let botonCarrito2 = document.getElementById("8")
let botonCarrito3 = document.getElementById("9")
let botonCarrito4 = document.getElementById("10")
let botonCarrito5 = document.getElementById("11")
let botonCarrito6 = document.getElementById("12")

botonCarrito1.addEventListener("click", ()=>{
    alerta()
    guardar(id_7, "Cargador")
})

botonCarrito2.addEventListener("click", ()=>{
    alerta()
    guardar(id_8, "Auriculares nokia")
})

botonCarrito3.addEventListener("click", ()=>{
    alerta()
    guardar(id_9, "Cargador samsung")
})

botonCarrito4.addEventListener("click", ()=>{
    alerta()
    guardar(id_10, "Auriculares x")
})

botonCarrito5.addEventListener("click", ()=>{
    alerta()
    guardar(id_11, "Cargador y")
})

botonCarrito6.addEventListener("click", ()=>{
    alerta()
    guardar(id_12, "Auriculares z")
})
