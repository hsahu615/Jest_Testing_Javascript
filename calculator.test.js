const calculator = require("./calculator");

const calci = new calculator(10, 5);
const calci2 = new calculator(150, 5);

describe("calculator", () => {
  it("addition", () => {
    expect(calci.addition()).toBe(15);
  });
  it("subtraction", () => {
    expect(calci.subtract()).toBe(5);
  });
  it("multiplication", () => {
    expect(calci.multiply()).toBe(50);
  });
  it("division", () => {
    expect(calci.divide()).toBe(2);
  });
  it("addition", () => {
    expect(calci2.addition()).toBe(155);
  });
  it("subtraction", () => {
    expect(calci2.subtract()).toBe(145);
  });
  it("multiplication", () => {
    expect(calci2.multiply()).toBe(750);
  });
  it("division", () => {
    expect(calci2.divide()).toBe(30);
  });
});
