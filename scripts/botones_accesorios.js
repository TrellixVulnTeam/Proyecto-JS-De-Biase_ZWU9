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




let botonCarrito1 = document.getElementById("7")

botonCarrito1.addEventListener("click", ()=>{
    botonCarrito1.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_7)
    localStorage.setItem("producto7", i)
})

botonCarrito1.addEventListener("mouseout", ()=>{
    botonCarrito1.innerHTML="Agregar al carrito"
})


let botonCarrito2 = document.getElementById("8")

botonCarrito2.addEventListener("click", ()=>{
    botonCarrito2.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_8)
    
    localStorage.setItem("producto8", i)
})

botonCarrito2.addEventListener("mouseout", ()=>{
    botonCarrito2.innerHTML="Agregar al carrito"
})


let botonCarrito3 = document.getElementById("9")

botonCarrito3.addEventListener("click", ()=>{
    botonCarrito3.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_9)
    
    localStorage.setItem("producto9", i)
    
})

botonCarrito3.addEventListener("mouseout", ()=>{
    botonCarrito3.innerHTML="Agregar al carrito"
    
})

let botonCarrito4 = document.getElementById("10")

botonCarrito4.addEventListener("click", ()=>{
    botonCarrito4.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_10)
    
    localStorage.setItem("producto10", i)
    
})

botonCarrito4.addEventListener("mouseout", ()=>{
    botonCarrito4.innerHTML="Agregar al carrito"
    
})

let botonCarrito5 = document.getElementById("11")

botonCarrito5.addEventListener("click", ()=>{
    botonCarrito5.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_11)
    
    localStorage.setItem("producto11", i)
})

botonCarrito5.addEventListener("mouseout", ()=>{
    botonCarrito5.innerHTML="Agregar al carrito"
})

let botonCarrito6 = document.getElementById("12")

botonCarrito6.addEventListener("click", ()=>{
    botonCarrito6.innerHTML="Producto Agregado"
    let i = JSON.stringify(id_12)
    
    localStorage.setItem("producto12", i)
})

botonCarrito6.addEventListener("mouseout", ()=>{
    botonCarrito6.innerHTML="Agregar al carrito"
})