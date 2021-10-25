const caesar = require("./caesarSipher");

const func1 = new caesar("Himanshu", 2);
const func2 = new caesar("Zubair Khan", 5);
const func3 = new caesar("The quick brown fox jumps over the lazy dog", 1);
const func4 = new caesar("Jkocpujw", 2);

describe("Caesar Sipher Encoding Test", () => {
  it("Single Word", () => {
    expect(func1.encode()).toBe("Jkocpujw");
  });
  it("With gaps", () => {
    expect(func2.encode()).toBe("Ezgfnw Pmfs");
  });
  it("All Letters", () => {
    expect(func3.encode()).toBe("Uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph");
  });
});

describe("Caesar Sipher Decoding Test", () => {
  it("Single Word", () => {
    expect(func4.decode()).toBe("Himanshu");
  });
});
