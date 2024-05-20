Function.prototype.bind = function (ctx) {
  return (object = ctx) => this.call(object, object);
}