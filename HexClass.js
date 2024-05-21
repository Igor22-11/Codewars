function Hex(value) {
  //...

  this.value = value;

  this.valueOf = function () {
    return this.value;
  };

  this.toString = function () {
    return `0x${this.value.toString(16).toUpperCase()}`
  };

  this.toJSON = function () {
    return this.toString();
  };

  this.plus = function (input) {
    return new Hex(this.value + input.valueOf());
  };

  this.minus = function (input) {
    return new Hex(this.value - input.valueOf());
  }

}

Hex.parse = function (string) {
  //...
  if (string.startsWith('0x')) {
    return parseInt(string.slice(2), 16);
  } else {
    return parseInt(string, 16);
  }
}