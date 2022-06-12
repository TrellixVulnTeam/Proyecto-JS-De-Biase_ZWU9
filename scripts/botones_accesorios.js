class Producto {
    constructor(producto, precio){
        this.producto = producto
        this.precio = precio       
    }
}

let productosAgregados = []

let id_7 = new Producto ("Auriculares", 1000)
let id_8 = new Producto ("Auriculares nokia", 2000)
let id_9 = new Producto ("Auriculares samsung", 12000)
let id_10 = new Producto ("Cargador x", 600)
let id_11 = new Producto ("Cargador y", 4000)
let id_12 = new Producto ("Cargador z", 800)

function alerta(){
    Toastify({
        text:"Producto agregado",
        duration: 3000,
        style:{
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast()
}
function guardar(b, c){
    let a = JSON.stringify(b)
    localStorage.setItem(c, a)
}


let botonCarrito1 = document.getElementById("7")
let botonCarrito2 = document.getElementById("8")
let botonCarrito3 = document.getElementById("9")
let botonCarrito4 = document.getElementById("10")
let botonCarrito5 = document.getElementById("11")
let botonCarrito6 = document.getElementById("12")

botonCarrito1.addEventListener("click", ()=>{
    alerta()
    guardar(id_7, "producto7")
})

botonCarrito2.addEventListener("click", ()=>{
    alerta()
    guardar(id_8, "producto8")
})

botonCarrito3.addEventListener("click", ()=>{
    alerta()
    guardar(id_9, "producto9")
})

botonCarrito4.addEventListener("click", ()=>{
    alerta()
    guardar(id_10, "producto10")
})

botonCarrito5.addEventListener("click", ()=>{
    alerta()
    guardar(id_11, "producto11")
})

botonCarrito6.addEventListener("click", ()=>{
    alerta()
    guardar(id_12, "producto12")
})
