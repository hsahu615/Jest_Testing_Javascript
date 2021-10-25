function capitalize(a) {
  a = a.split(" ");
  let result = transform(a);
  return result;
}

module.exports = capitalize;

function transform(a) {
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
  }
  a = a.join(" ");
  return a;
}

console.log(capitalize("hello world"));
