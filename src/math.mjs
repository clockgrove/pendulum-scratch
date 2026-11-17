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

export function mean(values) {
  if (values.length === 0) {
    throw new RangeError("mean: values must not be empty");
  }
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum / values.length;
}

export function sum(values) {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

export function square(x) {
  return x * x;
}
