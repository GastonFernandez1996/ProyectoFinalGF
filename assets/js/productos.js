document.addEventListener("DOMContentLoaded",()=>{
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const renderizarProductos= () => {
    url="https://dummyjson.com/products?limit=19"

    fetch(url)
    .then((response) =>response.json())
    .then((data)=>{
        let contenedorProductos = document.getElementById("contenedor-productos");


        for(const producto of data.products){
            let tarjetaProducto =document.createElement("article");
            tarjetaProducto.classList.add("producto");

            let imagenProducto=document.createElement("img");
            imagenProducto.src=producto.images[0];
            imagenProducto.alt=producto.description;

            let tituloProducto=document.createElement("h2");
            tituloProducto.textContent=producto.description;

            let precioProducto=document.createElement("p");
            precioProducto.textContent=`$${producto.price}`;

            let btnAgregar=document.createElement("button");
            btnAgregar.textContent="Agregar al carrito";
            btnAgregar.classList.add("boton")

            btnAgregar.addEventListener("click", ()=>{
                alert(`${producto.title} Agregado al carrito`)
                agregarProducto(producto);
                actualizarAgregados();
            });

            tarjetaProducto.appendChild(imagenProducto);
            tarjetaProducto.appendChild(tituloProducto);
            tarjetaProducto.appendChild(precioProducto);
            tarjetaProducto.appendChild(btnAgregar);

            contenedorProductos.appendChild(tarjetaProducto);
        }


    })
    .catch(err => console.error("ERROR: ", err));

}

const agregarProducto= (producto)=>{
carrito.push(producto);
localStorage.setItem("carrito",JSON.stringify(carrito));


}

const actualizarAgregados=()=>{
    const contadorCarrito=document.getElementById("contador-carrito");
    contadorCarrito.textContent=carrito.length;
}

renderizarProductos();
actualizarAgregados();
});