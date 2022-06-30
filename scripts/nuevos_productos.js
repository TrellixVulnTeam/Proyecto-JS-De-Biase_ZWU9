//Nuevo producto
class NuevoProducto {
    constructor(producto, precio, imagen){
        this.producto = producto
        this.precio = Number(precio)  
        this.imagen = imagen     
    }
}   

//Alertas de producto agregado
function alerta(){
    Toastify({
        text:"Producto agregado",
        duration: 3000,
        style:{
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast()
}

function toastyDenegado(){
    Toastify({
        text:"Por favor ingrese valores para cargar",
        duration: 3000,
        style:{
            background: 'linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)'
        }
    }).showToast()
}

//guardar en session storage
function guardar(valorAGuardar, clave){
    let a = JSON.stringify(valorAGuardar)
    sessionStorage.setItem(clave, a)
}

//guardar el localStorage para el carritop
function guardarLocal(valorAGuardar, clave){
    let a = JSON.stringify(valorAGuardar)
    localStorage.setItem(clave, a)
}


//tomar datos de imput para un nuevo producto
let newProductos = document.getElementById("agregarProductos")
newProductos.addEventListener("submit", newProducto)

function newProducto(x){
    
    x.preventDefault()
    let y = x.target
    let producto = y.children[0].value
    let precio = y.children[1].value
    if(producto.length == 0){
        toastyDenegado()
    }
    else{
        let product = new NuevoProducto(producto, precio, "images/celulares/samsung.jpg")
        
        guardar(product, `${product.producto}`)
        nuevos.push(product)
        
    }
}


//Listar elementos agregados.

for (let i = 1; i < sessionStorage.length; i++){
    
    let contenedor = document.getElementById("contenedor")
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("d-flex")
    tarjeta.classList.add("justify-content-center")
    let clave = sessionStorage.key(i)
    let valor = JSON.parse(sessionStorage.getItem(clave))
    
    if(typeof valor == "boolean"){ 
    }
    else{
            tarjeta.innerHTML =         
                                `<div class="col-6 col-md-4 d-flex justify-content-center">
                                <div class="p-3 border border-dark border-2 bordes">
                                    <div><h2>${valor.producto}</h2></div>
                                    <div><img src="${valor.imagen}" alt="Telefono samsung" class="bodyimg1"></div>
                                    <div><p>Precio: $${valor.precio}</p></div>
                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                        <button id="${valor.producto}" type="button" class="btn btn-outline-secondary">Agregar al carrito</button>
                                    </div>
                                    <a id="${valor.producto}${valor.precio}" class="btn btn-outline-secondary" href="productos.html" style="margin: 1% ;">Eliminar elementos</a>
                                    
                                </div>
                            </div>`

            
            contenedor.appendChild(tarjeta)

            let boton = document.getElementById(`${valor.producto}`)
            boton.addEventListener("click", ()=>{
                alerta()
                guardarLocal(valor, `${valor.producto}`)
            })

            let elimProducto = document.getElementById(`${valor.producto}${valor.precio}`)
            elimProducto.addEventListener("click", ()=>{
                sessionStorage.removeItem(clave)
            })
              
}}

//validar cantidad de productos para mostrar
const cantidadDeProductos = (sessionStorage.length > 1) ? true : false
cantidadDeProductos ? eliminarTodo() : false
function eliminarTodo(){

    let fuera = document.getElementById("eliminar")
    let creacionFuera = document.createElement("p")
    creacionFuera.innerHTML = `<a id="eliminarDentro" class="btn btn-outline-secondary" href="productos.html" style="margin: 1% ;">Eliminar elementos</a>`
    fuera.appendChild(creacionFuera)
    let del = document.getElementById("eliminarDentro")
    del.addEventListener("click", ()=>{
    
    sessionStorage.clear()
    })
}













