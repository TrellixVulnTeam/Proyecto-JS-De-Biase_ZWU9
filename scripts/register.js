class Usuario {
    constructor(nombre, email, password){
        this.nombre = nombre
        this.email = email
        this.password = password
        
        
    }
}

let register = document.getElementById("formularioRegistro")

register.addEventListener("submit", register1)

function register1(x){
    x.preventDefault()
    let y = x.target
    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let nuevoUsuario = new Usuario (nombre, email, password)
    let i = JSON.stringify(nuevoUsuario)
    let usuario = JSON.parse(i)
    let p = document.createElement("p")
    p.innerHTML = `Gracias por registrarse ${usuario.nombre}`
    register.appendChild(p)
}

