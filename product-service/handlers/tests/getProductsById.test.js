import { getProductsById } from "../getProductsById";
import { products } from "../../products.js";

test("getProductsById returns a product by ID", async () => {
  const productId = products[0].id;
  const event = { pathParameters: { productId } };
  const response = await getProductsById(event);
  expect(response.statusCode).toBe(200);
  expect(JSON.parse(response.body).id).toBe(productId);
});

test("getProductsById returns 404 when product not found", async () => {
  const productId = "invalidProductId";
  const event = { pathParameters: { productId } };
  const response = await getProductsById(event);
  expect(response.statusCode).toBe(404);
});
