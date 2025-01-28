/* eslint-disable no-prototype-builtins */
if (!BigInt.prototype.hasOwnProperty('toJSON')) {
  Object.defineProperty(BigInt.prototype, 'toJSON', {
    value() {
      return this.toString();
    },
    writable: true,
    configurable: true,
  });
}
