//Agregar alerta al seleccionar el pago
function metodoPago(totalProductos, cuotas, comision){
    let precioTotal = totalProductos+((totalProductos*comision)/cuotas)
    Swal.fire({
        title: "Antes de continuar",
        text: `Cada cuota tendra un recargo(prefio final: $${precioTotal}) `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, continuar con el pago'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Gracias por su compra'
          )
        }
      })
}

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
//mostrar elementos del carrito

let total = []

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

//eliminar elementos del carrito

const deleteDatos = (localStorage.length > 0) ? true : false

deleteDatos ? eliminarTodo() : false


// cantidad precio de productos

let elementos = document.getElementById("productos")
const totalProductos = total.reduce((acumulador, b) => acumulador + b, 0)
let cantProductos = document.createElement("p")
cantProductos.innerHTML = `<hr>
<p>Total de su compra</p><p>
$${totalProductos}</p>
`            
elementos.appendChild(cantProductos)




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
            let totalConDescuento = totalProductos - (totalProductos*0.20)
            let elemento = document.createElement("p")
            elemento.innerHTML = `<hr>
                                <h3><p><b>Total de su compra con descuento del 20%</b></p>
                                    <p>$${totalConDescuento}</p></h3>
                                    
                                    `
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
//Verifica si existen objetos en el carrito y si hay, da la opcion de pago
if( localStorage.length > 0){
    let mastercard = document.getElementById("master6")
        mastercard.addEventListener("click", ()=>{
            metodoPago(totalProductos, 6, 0.10)
        })
        let visa = document.getElementById("visa6")
        visa.addEventListener("click", ()=>{
            metodoPago(totalProductos, 6, 0.20)
        })
        let MercadoPago = document.getElementById("mercadoPago")
        MercadoPago.addEventListener("click", ()=>{
            metodoPago(totalProductos, 3, 0.30)
        })
        
}
        







