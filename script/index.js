const loadCategory = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
  const data = await response.json();
  showCategory(data.categories);
};

const showCategory = (categories) => {
  const categoryContainer = document.getElementById("categoryContainer");
  categories.forEach((element) => {
    const divElement = document.createElement("div");
    divElement.classList.add("flex");
    divElement.innerHTML = `
        <button class="btn">${element.category}
            <img class="w-8 h-8" src=${element.category_icon} alt="" />
        </button>
    `;
    categoryContainer.appendChild(divElement);
  });
};

loadCategory();
