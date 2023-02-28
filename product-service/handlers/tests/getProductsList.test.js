import { getProductsList } from "../getProductsList";

test("getProductsList returns a full array of products", async () => {
  const response = await getProductsList();
  expect(response.statusCode).toBe(200);
  expect(Array.isArray(JSON.parse(response.body))).toBe(true);
});
