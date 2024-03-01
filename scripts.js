fetch("https://striveschool-api.herokuapp.com/api/product/", {

  headers: {
    
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWI5MTRjNTllYzAwMTk5MGQ3NTgiLCJpYXQiOjE3MDkyODgzMzcsImV4cCI6MTcxMDQ5NzkzN30.ATBQElFvPTRQAmyxQ5gI4dPzfBdVxA7J3HVdJO3Sxks",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("dove sono i dati");
    }
  })
  .then((products) => {
    console.log(products);
    const productsListElement = document.getElementById("products-list");
    productsListElement.innerHTML = "";
    products.forEach((product) => {
      productsListElement.innerHTML += `
        <div class="col">
          <div class="card">
            <img src="${product.imageUrl}" class="card-img-top object-fit-scale" height="300px" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${product.name}e</h5>
              <p class="card-text cut-short">
               ${product.description}
              </p>
              <p>${product.price}eur</p>
              <a href="./back-office.html?eventId=${product._id}" class="btn btn-primary">Modifica</a>
              <a href="./details.html?eventId=${product._id}" class="btn btn-primary">Scopri di più</a>
            </div>
          </div>
        </div>
        `;
    });
  })
  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });
