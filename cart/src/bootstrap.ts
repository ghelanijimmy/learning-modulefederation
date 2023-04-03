import {faker} from "@faker-js/faker";

export const mount = (el: Element) => {
    el.innerHTML = `<div>You have ${faker.random.numeric(
        Math.random() * 3
    )} item(s) in the cart</div>`;
}

if(process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-cart");

    if (el) {
        mount(el);
    }
}