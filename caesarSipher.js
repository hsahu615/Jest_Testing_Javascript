function caesar(str, k) {
  this.encode = function () {
    let n = str.length;
    str = str.split("");

    for (let i = 0; i < n; i++) {
      if (str[i] === "") continue;
      if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
        str[i] = String.fromCharCode(
          ((str[i].charCodeAt(0) - 65 + k) % 26) + 65
        );
      } else if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
        str[i] = String.fromCharCode(
          ((str[i].charCodeAt(0) - 97 + k) % 26) + 97
        );
      }
    }
    str = str.join("");
    return str;
  };
  this.decode = function () {
    let n = str.length;
    str = str.split("");

    for (let i = 0; i < n; i++) {
      if (str[i] === "") continue;
      if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
        let spcCode = str[i].charCodeAt(0) - 65 - k;
        if (spcCode < 0) {
          str[i] = String.fromCharCode(65 + (str[i].charCodeAt(0) - 65 - k));
          continue;
        }
        str[i] = String.fromCharCode(
          ((str[i].charCodeAt(0) - 65 - k) % 26) + 65
        );
      } else if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
        let spcCode = str[i].charCodeAt(0) - 97 - k;
        if (spcCode < 0) {
          str[i] = String.fromCharCode(97 + (str[i].charCodeAt(0) - 97 - k));
          continue;
        }
        str[i] = String.fromCharCode(
          ((str[i].charCodeAt(0) - 97 - k) % 26) + 97
        );
      }
    }
    str = str.join("");
    return str;
  };
}

module.exports = caesar;
