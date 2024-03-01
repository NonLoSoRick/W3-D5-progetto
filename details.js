const url = "https://striveschool-api.herokuapp.com/api/product/";
const eventId = new URLSearchParams(window.location.search).get("eventId");
// console.log(url + eventId);
fetch(url + eventId, {
  // method: "DELETE",
  headers: {
    // "Content-type": "application/json",
    Authorization:
       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWI5MTRjNTllYzAwMTk5MGQ3NTgiLCJpYXQiOjE3MDkyODgzMzcsImV4cCI6MTcxMDQ5NzkzN30.ATBQElFvPTRQAmyxQ5gI4dPzfBdVxA7J3HVdJO3Sxks",
  },
})
  .then((res) => res.json())
  .then((product) => {
    const card = document.getElementById("product-detail-card");
    const modificaBtn = document.getElementById("modifica");
    const deleteBtn = document.getElementById("delete");
    card.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${product.imageUrl}" class="img-fluid" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Descripton:</p>
          <p class="card-text">
            ${product.description}
          </p>
          <p class="card-text"><span>price:</span>${product.price} eur</p>
          <p class="card-text"><small class="text-body-secondary">Last update: ${product.updatedAt}</small></p>
        </div>
      </div>
    </div>
  </div>
    `;
    modificaBtn.addEventListener("click", () => {
      window.location.assign("./back-office.html?eventId=" + eventId);
    });
    deleteBtn.addEventListener("click", () => {
      fetch(url + eventId, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWI5MTRjNTllYzAwMTk5MGQ3NTgiLCJpYXQiOjE3MDkyODgzMzcsImV4cCI6MTcxMDQ5NzkzN30.ATBQElFvPTRQAmyxQ5gI4dPzfBdVxA7J3HVdJO3Sxks",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("SUCCESS!");
            window.location.assign("./index.html");
          }
        })
        .catch((err) => console.log(err));
    });
  })
  .catch((error) => console.log(error));
