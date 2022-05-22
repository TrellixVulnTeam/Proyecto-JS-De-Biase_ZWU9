

productosAgregados = []

class Producto {
    constructor(producto, precio, cantidad, total){
        this.producto = producto
        this.precio = precio
        this.cantidad = cantidad
        this.total = total
        
    }
}
function master6(){
    let precio = Number(prompt("Por favor ingrese el precio del producto:"))
    let precioFinal = (precio/6)*0.12
    alert("El precio de cada cuota seria $" + precioFinal + " (12% de recargo)")
}   
function master12(){
    let precio = Number(prompt("Por favor ingrese el precio del producto:"))
    let precioFinal = (precio/12)*0.30
    alert("El precio de cada cuota seria $" + precioFinal + " (30% de recargo)")
    
}
function visa6(){
    let precio = Number(prompt("Por favor ingrese el precio del producto:"))
    let precioFinal = (precio/6)*0.20
    alert("El precio de cada cuota seria $" + precioFinal + " (30% de recargo)")
       
}
function visa12(){
    let precio = Number(prompt("Por favor ingrese el precio del producto:"))
    let precioFinal = (precio/12)*0.35
    alert("El precio de cada cuota seria $" + precioFinal + " (35% de recargo)")
    
}

continuidad = true
index = 0
while(continuidad == true)
{
    let menu = prompt("Que desea hacer hoy? \n 1-Agregar productos\n 2-Calcular cuota mastercard 6 cuotas\n 3-Calcular cuota mastercard 12 cuotas\n 4-Calcular cuota visa 6 cuotas\n 5-Calcular cuota visa 12 cuotas\n 6-Listar productos agregados\n 7-Borrar productos agregados \n 8-Buscar producto \n 9-Salir")

    if(menu == "1"){

        let nuevoProducto = new Producto (prompt("ingresar el producto vendido"), precio = Number(prompt("ingresar el precio" )), cantidad = Number(prompt("ingresar la cantidad de productos vendidos")), precio*cantidad )
        productosAgregados.push(nuevoProducto)
        console.log(productosAgregados);
        
    }
    else if(menu == "2"){
        master6()
          
    }
    else if(menu == "3"){
        master12()
          
    }
    else if(menu == "4"){
        visa6()
          
    }
    else if(menu == "5"){
        visa12()
          
    }
    else if(menu == "6"){
        
        
        productosAgregados.forEach((producto)=>{
            console.log("Productos: " + producto.producto + " - Precio: " + producto.precio + " - Precio final: $"+ producto.total)
        })
          
    }
    
    else if (menu == "7"){
        productoSeleccionado = prompt("Que producto desdea eliminar?")
        index = productosAgregados.indexOf(productoSeleccionado)
        productosAgregados.splice(index, 1)
    }
    else if( menu == "8"){
        
        let producto = prompt("Que producto desea buscar?")
        let encontrados = productosAgregados.filter((x)=>x.producto);
        console.log(encontrados)
    }



    else if(menu == "9"){
        alert("GRACIAS POR USAR EL PROGRAMA")
        continuidad = false
    }
}
