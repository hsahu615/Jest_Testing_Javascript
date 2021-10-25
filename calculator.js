function calculator(a, b) {
  this.a = a;
  this.b = b;
  this.multiply = function () {
    return this.a * this.b;
  };
  this.addition = function () {
    return this.a + this.b;
  };
  this.subtract = function () {
    return this.a - this.b;
  };
  this.divide = function () {
    return this.a / this.b;
  };
}

module.exports = calculator;
