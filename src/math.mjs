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

export function abs(x) {
  return x < 0 ? -x : x;
}

export function sign(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return x === 0 ? 0 : NaN;
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function cube(x) {
  return x * x * x;
}

export function isEven(n) {
  return n % 2 === 0;
}

export function isOdd(n) {
  return Number.isInteger(n) && n % 2 !== 0;
}

export function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("factorial: n must be a non-negative integer");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

export function lcm(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new RangeError("lcm: a and b must be integers");
  }
  if (a === 0 || b === 0) {
    return 0;
  }
  return Math.abs((a / gcd(a, b)) * b);
}
