import { faker } from "@faker-js/faker";

const cartText = `<div>You have ${faker.random.numeric(
  Math.random() * 3
)} item(s) in the cart</div>`;

const cartDiv = document.querySelector("#dev-cart");
cartDiv.innerHTML = cartText;
