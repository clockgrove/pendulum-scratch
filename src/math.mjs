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

export function median(values) {
  if (values.length === 0) {
    throw new RangeError("median: values must not be empty");
  }
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export function max(values) {
  if (values.length === 0) {
    throw new RangeError("max: values must not be empty");
  }
  let largest = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] > largest) {
      largest = values[i];
    }
  }
  return largest;
}

export function min(values) {
  if (values.length === 0) {
    throw new RangeError("min: values must not be empty");
  }
  let smallest = values[0];
  for (const value of values) {
    if (value < smallest) {
      smallest = value;
    }
  }
  return smallest;
}

export function product(values) {
  let result = 1;
  for (const value of values) {
    result *= value;
  }
  return result;
}
