/*pagina prodotto*/

const params = new URLSearchParams(window.location.search)
const id = params.get('id');
fetch = (`https://striveschool-api.herokuapp.com/api/product?id=${id}`,{
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U"
    }
})

.then(response => response.json())
.then( product => {
    const product =data[0]

    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const price=document.querySelector("#price");

    title.innerHTML=product.title
    description.innerHTML=product.description
    price.innerHTML=product.price 
    
})

