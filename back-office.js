const eventId = new URLSearchParams(window.location.search).get("eventId");

if (eventId) {
  const btnAdd = document.getElementById("add");
  btnAdd.innerText = "Modifica";
  btnAdd.setAttribute("disabled", "");
  const myForm = document.getElementById("my-form");
  /*CREO UN BOTTONE RESET */
  const resetBtn = document.createElement("button");
  resetBtn.innerText = "Reset";
  resetBtn.setAttribute("type", "button");
  resetBtn.setAttribute("disabled", "");
  myForm.appendChild(resetBtn);
  const reset = () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
      headers: {
        Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWI5MTRjNTllYzAwMTk5MGQ3NTgiLCJpYXQiOjE3MDkyODgzMzcsImV4cCI6MTcxMDQ5NzkzN30.ATBQElFvPTRQAmyxQ5gI4dPzfBdVxA7J3HVdJO3Sxks",
      },
    })
      .then((response) => response.json())
      .then((product) => {
        document.getElementById("name").value = product.name;
        document.getElementById("description").value = product.description;
        document.getElementById("imageUrl").value = product.imageUrl;
        document.getElementById("brand").value = product.brand;
        document.getElementById("price").value = product.price;

        btnAdd.removeAttribute("disabled");
        resetBtn.removeAttribute("disabled");

        /*METTO IN ASCOLTO */
      })
      .catch((error) => console.log(error));
  };

  reset();
  resetBtn.addEventListener("click", () => {
    reset();
  });

  btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWI5MTRjNTllYzAwMTk5MGQ3NTgiLCJpYXQiOjE3MDkyODgzMzcsImV4cCI6MTcxMDQ5NzkzN30.ATBQElFvPTRQAmyxQ5gI4dPzfBdVxA7J3HVdJO3Sxks",
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value,
        brand: document.getElementById("brand").value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.assign("./index.html");
        }
      })
      .catch((err) => console.log(err));
  });
} else {
  const btnAdd = document.getElementById("add");
  btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWI5MTRjNTllYzAwMTk5MGQ3NTgiLCJpYXQiOjE3MDkyODgzMzcsImV4cCI6MTcxMDQ5NzkzN30.ATBQElFvPTRQAmyxQ5gI4dPzfBdVxA7J3HVdJO3Sxks",
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value,
        brand: document.getElementById("brand").value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.assign("/index.html");
        }
      })
      .catch((err) => console.log(err));
  });
}
