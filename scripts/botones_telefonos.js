class Telefono {
    constructor(producto, precio){
        this.producto = producto
        this.precio = precio       
    }
}



let id_1 = new Telefono ("motorola", 11000)
let id_2 = new Telefono ("nokia", 20000)
let id_3 = new Telefono ("samsung", 12000)
let id_4 = new Telefono ("motorola x", 2600)
let id_5 = new Telefono ("samgung y", 54000)
let id_6 = new Telefono ("nokia z", 32800)

//Alerta de seleccion de producto
function alerta(){
    Toastify({
        text:"Producto agregado",
        duration: 3000,
        style:{
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast()
}

//guarda el producto en el local Storage para el carrito
function guardar(valorAGuardar, clave){
    let a = JSON.stringify(valorAGuardar)
    localStorage.setItem(clave, a)
}

//eventos a los productos
let botonCarrito1 = document.getElementById("1")
let botonCarrito2 = document.getElementById("2")
let botonCarrito3 = document.getElementById("3")
let botonCarrito4 = document.getElementById("4")
let botonCarrito5 = document.getElementById("5")
let botonCarrito6 = document.getElementById("6")

botonCarrito1.addEventListener("click", ()=>{
    alerta()
    guardar(id_1, "motorola")
})


botonCarrito2.addEventListener("click", ()=>{
    alerta()
    guardar(id_2, "nokia")
})


botonCarrito3.addEventListener("click", ()=>{
    alerta()
    guardar(id_3, "samsung")
})


botonCarrito4.addEventListener("click", ()=>{
    alerta()
    guardar(id_4, "motorola x")
})


botonCarrito5.addEventListener("click", ()=>{
    alerta()
    guardar(id_5, "samgung y")
})


botonCarrito6.addEventListener("click", ()=>{
    alerta()
    guardar(id_6, "nokia z")
})


