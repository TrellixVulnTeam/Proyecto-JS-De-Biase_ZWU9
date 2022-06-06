
productosAgregados = []
productosEliminados = []

class Producto {
    constructor(producto, precio, cantidad, total){
        this.producto = producto
        this.precio = precio
        this.cantidad = cantidad
        this.total = total
        
    }
}


let formularioMaster6 = document.getElementById("master6")
let formularioMaster12 = document.getElementById("master12")
let formularioVisa6 = document.getElementById("visa6")
let formularioVisa12 = document.getElementById("visa12")
let formularioAgregarProductos = document.getElementById("agregarProductos")
let formularioBorrarProductos = document.getElementById("borrarProductos")
let botonListar = document.getElementById("listarProductos")
let resultadoListar = document.getElementById("resultado")



formularioMaster6.addEventListener("submit", datosMaster6)
formularioMaster12.addEventListener("submit", datosMaster12)
formularioVisa6.addEventListener("submit", datosVisa6)
formularioVisa12.addEventListener("submit", datosVisa12)
formularioAgregarProductos.addEventListener("submit", datosAgregarProductos)
formularioBorrarProductos.addEventListener("submit", datosBorrarProductos)
botonListar.addEventListener("click", listarProductos)



function datosMaster6(x){
    x.preventDefault()
    let y = x.target
    let producto = y.children[1].value
    let p = document.createElement("p")
    p.innerHTML = "El precio de cada cuota seria $" + producto*0.12 + " (12% de recargo)"
    formularioMaster6.appendChild(p)
}
function datosMaster12(x){
    x.preventDefault()
    let y = x.target
    let producto = y.children[1].value
    let p = document.createElement("p")
    p.innerHTML = "El precio de cada cuota seria $" + producto*0.30 + " (30% de recargo)"
    formularioMaster12.appendChild(p)
}
function datosVisa6(x){
    x.preventDefault()
    let y = x.target
    let producto = y.children[1].value
    let p = document.createElement("p")
    p.innerHTML = "El precio de cada cuota seria $" + producto*0.30 + " (30% de recargo)"
    formularioVisa6.appendChild(p)
}
function datosVisa12(x){
    x.preventDefault()
    let y = x.target
    let producto = y.children[1].value
    let p = document.createElement("p")
    p.innerHTML = "El precio de cada cuota seria $" + producto*0.35 + " (35% de recargo)"
    formularioVisa12.appendChild(p)
}
function datosAgregarProductos(x){
    x.preventDefault()
    let y = x.target
    let producto = y.children[0].value
    let precio = y.children[1].value
    let cantidad = y.children[2].value
    let p = document.createElement("p")
    p.innerHTML = "Producto: "+ producto + "- Precio: " + precio + "- Cantidad: " + cantidad
    formularioAgregarProductos.appendChild(p)
}
function datosAgregarProductos(x){
    x.preventDefault()
    let y = x.target
    let producto = y.children[0].value
    let precio = y.children[1].value
    let cantidad = y.children[2].value
    let total = precio*cantidad
    let nuevoProducto = new Producto (producto, precio, cantidad, total)
    productosAgregados.push(nuevoProducto)
    let p = document.createElement("p")
    p.innerHTML = "Producto: "+ producto + "- Precio: " + precio + "- Cantidad: " + cantidad
    formularioAgregarProductos.appendChild(p)
}
function datosBorrarProductos(x){
    x.preventDefault()
    let y = x.target
    let producto = y.children[0].value
    productoSeleccionado = producto
    index = productosAgregados.indexOf(productoSeleccionado)
    productosAgregados.splice(index, 1)
    productosEliminados.push(productoSeleccionado)
    let p = document.createElement("p")
    p.innerHTML = "Producto eliminado: "+ producto
    formularioBorrarProductos.appendChild(p)
}

function listarProductos(){
    productosAgregados.forEach((producto)=>{
        console.log("Productos: " + producto.producto + " - Precio: " + producto.precio + " - Precio final: $"+ producto.total)
        
        
        let li = document.createElement("li")
        let hr = document.createElement("hr")
        li.innerHTML = producto.producto
        resultado.appendChild(li)
        resultado.appendChild(hr)
    })
}





