import {mount as mountProducts} from "products/ProductsIndex";
import {mount as mountCart } from "cart/CartShow";

mountProducts(document.querySelector("#products-section"));
mountCart(document.querySelector("#cart-section"));