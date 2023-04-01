import { faker } from "@faker-js/faker";

let products = "";

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

const rootDiv = document.querySelector("#dev-products");
rootDiv.innerHTML = products;

export { products };
