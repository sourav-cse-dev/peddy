const hideLoader = (id) => {
  document.getElementById.style.display = "none";
};

const displayLoader = (id) => {
  document.getElementById.style.display = "block";
};

const loadCategory = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
  const data = await response.json();
  displayCategory(data.categories);
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("categoryContainer");
  categories.forEach((element) => {
    const divElement = document.createElement("div");
    divElement.classList.add("flex");
    divElement.innerHTML = `
        <button onclick="loadPetByCategory('${element.category}')" class="btn">${element.category}
            <img class="w-8 h-8" src=${element.category_icon} alt="" />
        </button>
    `;
    categoryContainer.appendChild(divElement);
  });
};

const loadPetByCategory = async (petCategoryName) => {
//   displayLoader("spinner");
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${petCategoryName}`);
  const data = await response.json();
  if (data.data) {
    displayPetsByCategory(data.data);
    // hideLoader("spinner");
  }
};

const displayPetsByCategory = (pets) => {
  document.getElementById("petsContainer").style.display = "block";
  document.getElementById("status").style.display = "none";

  if (!pets.length) {
    document.getElementById("petsContainer").style.display = "none";
    document.getElementById("status").style.display = "block";
  }

  const petsContainer = document.getElementById("petsContainer");
  petsContainer.innerHTML = "";

  pets.forEach((element) => {
    const divElement = document.createElement("div");
    divElement.classList.add("mt-5");
    divElement.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
            <img
                src="${element.image}"
                alt="Pets Image" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${element.breed}</h2>
                <p>${element.pet_details.slice(0, 100)}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
        `;
    petsContainer.appendChild(divElement);
  });
};

loadPetByCategory();
loadCategory();
