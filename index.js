/*Il token di accesso per l'autenticazione basata su token è:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0

.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U Puoi utilizzarlo nella tua richiesta impostando le intestazioni in questo modo:

fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U"
}
})*/




fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U"
    }
})
.then((r) => r.json())
.then((data)=>{
    console.log(data);
    

        
})

/*const name=document.querySelector("#name");
const imgUrl = document.querySelector("#imgUrl");
const description = document.querySelector("#description");
const price = document.querySelector("#price");

async function prodotti() {

    data.response()

    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name:name.value,
            imgUrl:imgUrl.value,
            description:description.value,
            price:price.value,
            })
        

    

    })}
    function prodotti(data){
        const prodotti=document.querySelector("#prodotti")
        prodotti.innerHTML = data.map(({ name, imgUrl, description ,price }) => 
            /*html*/


const name = document.querySelector("#name");
const imgUrl = document.querySelector("#imgUrl");
const description = document.querySelector("#description");
const price = document.querySelector("#price");

const prodottiList = document.querySelector("#prodotti");

// Function to fetch and display products
async function fetchAndDisplayProducts() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U" // Replace with your access token
            }
        });

        if (response.ok) {
            const data = await response.json();

            prodottiList.innerHTML = "";

           
            data.forEach((product) => {
                prodottiList.innerHTML += `
                    <div class="col-12 col-sm-6 col-lg-2">
                        <h1>${product.name}</h1>
                        <img src="${product.imgUrl}" alt="${product.name}">
                        <h2>${product.description}</h2>
                        <h3>${product.price}</h3>
                    </div>
                `;
            });
        } else {
            console.error("Failed to fetch products");
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Function to add a new product
async function addProduct() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U" // Replace with your access token
            },
            body: JSON.stringify({
                name: name.value,
                imgUrl: imgUrl.value,
                description: description.value,
                price: price.value
            })
        });

        if (response.ok) {
            // Fetch and display updated product list after adding a new product
            fetchAndDisplayProducts();
        } else {
            console.error("Failed to add the product");
        }
    } catch (error) {
        console.error("Error adding the product:", error);
    }
}

// Call the function to initially fetch and display products
fetchAndDisplayProducts();
 