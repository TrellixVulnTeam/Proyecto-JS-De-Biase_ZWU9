let total = []
for (let i = 0; i < localStorage.length; i++){
    
    let elementos = document.getElementById("productos")
    let clave = localStorage.key(i)
    let valor = JSON.parse(localStorage.getItem(clave))
    let p = document.createElement("p")
    total.push(valor.precio)
    p.innerHTML = valor.producto + " $" + valor.precio
    elementos.appendChild(p)
    
    

}

let elementos = document.getElementById("productos")
const total1 = total.reduce((acumulador, elemento) => acumulador + elemento, 0)
let x = document.createElement("p")
x.innerHTML = `<hr>
<p>Total de su compra</p><p>
$${total1}</p>`
                    
elementos.appendChild(x)

let del = document.getElementById("eliminar")

del.addEventListener("click", ()=>{
    localStorage.clear()
    })