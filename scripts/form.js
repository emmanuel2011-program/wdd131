const products = [
    {
      id: "ac-1978",
      name: "input capacitor",
    //   avg-rating: 4.5  :: Assignment typo
      averagerating: 4.5
    },
    {
      id: "fc-2456",
      name: "power shunts",
      averagerating: 4.7
    },
    {
      id: "ad-2022",
      name: "miniature circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "power cable",
      averagerating: 3.9
    },
    {
      id: "ee-1978",
      name: "audio equalizer",
      averagerating: 5.0
    }
  ];

products.forEach(product => {
  let productHTML = document.createElement("option");
  productHTML.setAttribute("value", `${product.name}`);
  productHTML.innerHTML = product.name;
  document.getElementById("prodName").appendChild(productHTML);
});

//-------------------------------------------------------------------------------
// Number of Reviews - local storage (numberReviews-ls)
//-------------------------------------------------------------------------------
let numberReviews = Number(window.localStorage.getItem("numberReviews-ls"));
numberReviews.textContent = `Number of reviews submitted: ${numberReviews}`;

numberReviews++;
localStorage.setItem("numberReviews-ls", numberReviews);
document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});