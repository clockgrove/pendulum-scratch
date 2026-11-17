export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function subtract(a, b) {
  return a - b;
}

export function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError("clamp: min must not be greater than max");
  }
  return value < min ? min : value > max ? max : value;
}
