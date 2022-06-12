let total = []

const [a, b] = total

for (let i = 0; i < localStorage.length; i++){
    
    let elementos = document.getElementById("productos")
    let clave = localStorage.key(i)
    let valor = JSON.parse(localStorage.getItem(clave))
    let p = document.createElement("p")
    total.push(valor.precio)
    p.innerHTML = valor.producto + " $" + valor.precio
    elementos.appendChild(p)
    
}

function toasty(){
    Toastify({
        text:"Producto agregado",
        duration: 3000,
        style:{
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast()
}


const xx = (localStorage.length > 0) ? true : false

xx ? eliminarTodo() : console.log("nada")

function eliminarTodo(){

    let fuera = document.getElementById("eliminar")
    let creacionFuera = document.createElement("p")
    creacionFuera.innerHTML = `<a id="eliminarDentro" class="btn btn-outline-secondary" href="carrito.html" style="margin: 1% ;">Eliminar elementos</a>`
    fuera.appendChild(creacionFuera)
    let del = document.getElementById("eliminarDentro")
    del.addEventListener("click", ()=>{
    toasty()
    localStorage.clear()
    })
}



`<a id="eliminar" class="btn btn-outline-secondary" href="carrito.html" style="margin: 1% ;">Eliminar elementos</a>`

let elementos = document.getElementById("productos")
const total1 = total.reduce((acumulador, b) => acumulador + b, 0)
let x = document.createElement("p")
x.innerHTML = `<hr>
<p>Total de su compra</p><p>
$${total1}</p>`
                    
elementos.appendChild(x)


