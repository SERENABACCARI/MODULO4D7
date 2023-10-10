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
    .then((data) => {
        console.log(data);

    })

const name = document.querySelector("#name");
const imgUrl = document.querySelector("#imgUrl");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const button = document.querySelector("#button");

const prodottiList = document.querySelector("#prodotti");

// funzione fetch e metodo get*/
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
                    <div class="col-12 col-sm-6 col-lg-3">
                        <h2>${product.name}</h2>
                        <img src="${product.imgUrl}" alt="${product.name}">
                        <h3>${product.description}</h3>
                        <h6>${product.price}</h6>
                        <button type="button" class="btn btn-info"onclick="open(${data.id})" >open</button>
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

/*richiamo il button open*/

function open(id) {
    window.open(`prodotto.html?id=${id}`)

}



// creo prodotti per il front page con il metodo post*/
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

            fetchAndDisplayProducts();
        } else {
            console.error("Failed to add the product");
        }
    } catch (error) {
        console.error("Error adding the product:", error);
    }
}


fetchAndDisplayProducts();




/*modifica prodotto con il metodo put*/
async function modifica() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U"
            },
            body: JSON.stringify({
                name: name.value,
                description: description.value,
                price: price.value
            })
        });

        if (response.ok) {
            modifica();
        } else {
            console.error("Failed ");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}









