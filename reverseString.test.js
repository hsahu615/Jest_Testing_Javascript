let reverse = require("./reverseString");

it("reverse", () => {
  expect(reverse("hello")).toBe("olleh");
});

it("empty string", () => {
  expect(reverse("")).toBe("");
});
