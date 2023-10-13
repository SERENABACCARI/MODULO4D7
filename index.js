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

// METODO GET*/
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
                
                    <div id="product" class="col-12 col-sm-6 col-lg-3">
                        <h2>${product.name}</h2>
                        <img src="https://m.media-amazon.com/images/I/61NsFAuOM9L._AC_UF1000,1000_QL80_.jpg" alt="${product.name}" style="height:100px">
                        <h3>${product.description}</h3>
                        <h4>${product.price}</h4>
                         <div class="row">
                            <div class="col-2">
                                <button type="button" class="btn btn" onclick="open('${product._id}')">Open</button>
                            </div>
                            <div class="col-2">
                                <button class="btn btn" onclick="EditProduct('${product._id}')"><i class="bi bi-pencil-square"></i></button>
                            </div>
                            <div class="col-2">
                                <button class="btn btn" onclick="deleteProduct('${product._id}')"><i class="bi bi-trash3"></i></button>
                            </div>
                        </div>
                    </div>`;
            });
        } else {
            console.error("Failed to fetch products");
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    }

}
/*METODO PUT*/
async function EditProduct(_id) {
    const editEvent = await fetch("https://striveschool-api.herokuapp.com/api/product/" + _id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U"
        }
    });

    if (editEvent.ok) {
        const editEventJson = await editEvent.json();
        const editEventDiv = document.querySelector("#product");

        const { name, description, price } = editEventJson;

        editEventDiv.innerHTML = `
            <form class="row mt-5" onsubmit="editEventSubmit(event, '${_id}')">
                <div class="container ">
                    <div class="row">
                        <div class="col">
                            <input id="name" type="text" placeholder="name" value="${name}">
                        </div>
                        <div class="col">
                            <input id="description" type="text" placeholder="description" value="${description}">
                        </div>
                        <div class="col">
                            <input id="price" type="text" placeholder="price" value="${price}">
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        `;
    }
}

async function editEventSubmit(event, _id) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const price = document.querySelector("#price").value;
    const submit = document.querySelector("#submit").value;


}




/*richiamo il button open*/

function open(product) {
    window.open(`prodotto.html?id=${product._id}`)

}



// CREO FRONTPAGE CON IL METODO POST*/
async function addProduct() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkNWE0YjUyYmJmMzAwMTg3OWIyMGUiLCJpYXQiOjE2OTY0MjI0NzUsImV4cCI6MTY5NzYzMjA3NX0.cOoVKZ1LhToN_9qfJKEdqgLg9zXJ_yAYv1rF8ChQy7U"
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


/*METODO DELETE*/

async function deleteProduct(_id) {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/" + _id, {
        method: "DELETE",
    })
    if (response.ok) { alert("Cancellato +_id"); }

    else { alert("cancellazione fallita!!") }
}






