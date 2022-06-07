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





let botonCarrito1 = document.getElementById("1")

botonCarrito1.addEventListener("click", ()=>{
    botonCarrito1.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_1)
    
    localStorage.setItem("producto1", i)
})

botonCarrito1.addEventListener("mouseout", ()=>{
    botonCarrito1.innerHTML="Agregar al carrito"
})

let botonCarrito2 = document.getElementById("2")

botonCarrito2.addEventListener("click", ()=>{
    botonCarrito2.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_2)
    
    localStorage.setItem("producto2", i)
})

botonCarrito2.addEventListener("mouseout", ()=>{
    botonCarrito2.innerHTML="Agregar al carrito"
})

let botonCarrito3 = document.getElementById("3")

botonCarrito3.addEventListener("click", ()=>{
    botonCarrito3.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_3)
    
    localStorage.setItem("producto3", i)
})

botonCarrito3.addEventListener("mouseout", ()=>{
    botonCarrito3.innerHTML="Agregar al carrito"
})

let botonCarrito4 = document.getElementById("4")

botonCarrito4.addEventListener("click", ()=>{
    botonCarrito4.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_4)
    
    localStorage.setItem("producto4", i)
})

botonCarrito4.addEventListener("mouseout", ()=>{
    botonCarrito4.innerHTML="Agregar al carrito"
})

let botonCarrito5 = document.getElementById("5")

botonCarrito5.addEventListener("click", ()=>{
    botonCarrito5.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_5)
    
    localStorage.setItem("producto5", i)
})

botonCarrito5.addEventListener("mouseout", ()=>{
    botonCarrito5.innerHTML="Agregar al carrito"
})

let botonCarrito6 = document.getElementById("6")

botonCarrito6.addEventListener("click", ()=>{
    botonCarrito6.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_6)
    
    localStorage.setItem("producto6", i)
})

botonCarrito6.addEventListener("mouseout", ()=>{
    botonCarrito6.innerHTML="Agregar al carrito"
})

