const capitalize = require("./capitalize");

it("Empty String", () => {
  expect(capitalize("")).toBe("");
});
it("One word", () => {
  expect(capitalize("hello")).toBe("Hello");
});
it("full sentence", () => {
  expect(capitalize("hello world")).toBe("Hello World");
});
