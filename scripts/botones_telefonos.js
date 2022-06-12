class Producto {
    constructor(producto, precio){
        this.producto = producto
        this.precio = precio       
    }
}

let productosAgregados = []

let id_1 = new Producto ("motorola", 11000)
let id_2 = new Producto ("nokia", 20000)
let id_3 = new Producto ("samsung", 12000)
let id_4 = new Producto ("motorola x", 2600)
let id_5 = new Producto ("samgung y", 54000)
let id_6 = new Producto ("nokia z", 32800)
let id_7 = new Producto ("Auriculares", 1000)
let id_8 = new Producto ("Auriculares nokia", 2000)
let id_9 = new Producto ("Auriculares samsung", 12000)
let id_10 = new Producto ("Cargador x", 600)
let id_11 = new Producto ("Cargador y", 4000)
let id_12 = new Producto ("Cargador z", 800)

const proximo = {
    producto: "nextel",
    precio: 2000
}

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

let botonCarrito1 = document.getElementById("1")
let botonCarrito2 = document.getElementById("2")
let botonCarrito3 = document.getElementById("3")
let botonCarrito4 = document.getElementById("4")
let botonCarrito5 = document.getElementById("5")
let botonCarrito6 = document.getElementById("6")

botonCarrito1.addEventListener("click", ()=>{
    alerta()
    guardar(id_1, "producto1")
})


botonCarrito2.addEventListener("click", ()=>{
    alerta()
    guardar(id_2, "producto2")
})


botonCarrito3.addEventListener("click", ()=>{
    alerta()
    guardar(id_3, "producto3")
})


botonCarrito4.addEventListener("click", ()=>{
    alerta()
    guardar(id_4, "producto4")
})


botonCarrito5.addEventListener("click", ()=>{
    alerta()
    guardar(id_5, "producto5")
})


botonCarrito6.addEventListener("click", ()=>{
    alerta()
    guardar(id_6, "producto6")
})


