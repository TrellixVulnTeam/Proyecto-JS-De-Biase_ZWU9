
//mostrar elementos del carrito

let total = []

const [a, b] = total

for (let i = 0; i < localStorage.length; i++){
    
    let elementos = document.getElementById("productos")
    let clave = localStorage.key(i)
    let valor = JSON.parse(localStorage.getItem(clave))
    let p = document.createElement("p")
    total.push(valor.precio)
    p.innerHTML = valor.producto + " $" + valor.precio + `<a id="${valor.producto}${valor.precio}" class="btn btn-outline-secondary" href="carrito.html" style="margin: 1% ;">Eliminar producto</a>`
    elementos.appendChild(p)
    let elimProducto = document.getElementById(`${valor.producto}${valor.precio}`)
    elimProducto.addEventListener("click", ()=>{
        localStorage.removeItem(clave)
    })
    
}

//alerta de no agrego cupon

function toastyDenegado(){
    Toastify({
        text:"Inseter un codigo valido",
        duration: 3000,
        style:{
            background: 'linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)'
        }
    }).showToast()
}

//alerta agrego cupon

function toastyAceptado(){
    Toastify({
        text:"Codigo insertado con exito",
        duration: 3000,
        style:{
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast()
}

//eliminar elementos del carrito

const xx = (localStorage.length > 0) ? true : false

xx ? eliminarTodo() : console.log("nada")

function eliminarTodo(){

    let fuera = document.getElementById("eliminar")
    let creacionFuera = document.createElement("p")
    creacionFuera.innerHTML = `<a id="eliminarDentro" class="btn btn-outline-secondary" href="carrito.html" style="margin: 1% ;">Eliminar elementos</a>`
    fuera.appendChild(creacionFuera)
    let del = document.getElementById("eliminarDentro")
    del.addEventListener("click", ()=>{
    
    localStorage.clear()
    })
}


// cantidad precio de productos

let elementos = document.getElementById("productos")
const total1 = total.reduce((acumulador, b) => acumulador + b, 0)
let x = document.createElement("p")
x.innerHTML = `<hr>
<p>Total de su compra</p><p>
$${total1}</p>`            
elementos.appendChild(x)


// Agregar cupon de descuento

let cupon = document.getElementById("cupon")
cupon.addEventListener("submit", descuento)

let cuponDescuento = 2020020

function descuento(input){
    input.preventDefault()
    let valor = input.target
    let producto = valor.children[1].value
    if(localStorage.length > 0){
            if (producto == cuponDescuento){
            console.log(producto)
            let totalConDescuento = total1 - (total1*0.20)
            let elemento = document.createElement("p")
            elemento.innerHTML = `<hr>
                                <h3><p><b>Total de su compra con descuento del 20%</b></p>
                                    <p>$${totalConDescuento}</p></h3>`
            cupon.appendChild(elemento)
            document.getElementById("texto").innerHTML = "<h3><p><b>CUPON DE DESCUENTO APLICADO</b></p></h3>"
            document.getElementById("botonCalcular").remove()
            toastyAceptado()
            }
            else{
                toastyDenegado()
            }}
    else{
        Toastify({
            text:"Por favor agregue productos al carrito",
            duration: 3000,
            style:{
                background: 'linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)'
            }
        }).showToast()
    }
    


}


