document.addEventListener("DOMContentLoaded",()=>{
let reseñas=JSON.parse(localStorage.getItem("reseñas")) || [];

const renderizarResenias = () => {
        url="https://dummyjson.com/comments?limit=19";

        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{

             reseñas = data.comments;
            localStorage.setItem("reseñas", JSON.stringify(reseñas));
                let contenedorReseñas=document.getElementById("contenedor-reseñas");

                for(const reseña of data.comments){
                    let tarjetaReseña= document.createElement("article");
                    tarjetaReseña.classList.add("reseña")

                    let nombreReseña = document.createElement("h3");
                    nombreReseña.textContent= reseña.user.fullName;

                    let contenidoReseña=document.createElement("p");
                    contenidoReseña.textContent=reseña.body;

                    tarjetaReseña.appendChild(nombreReseña);
                    tarjetaReseña.appendChild(contenidoReseña);

                    contenedorReseñas.appendChild(tarjetaReseña);
                }

       })
        .catch(err => console.error("ERROR: ", err));
}

renderizarResenias();

});