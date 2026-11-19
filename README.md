# pendulum-scratch

A throwaway repository for checking Clockgrove Pendulum releases end to end. Nothing here is real work.

## Math module

`src/math.mjs` exports `add` and `multiply(a, b)`, which returns the product of `a` and `b`.

```js
import { multiply } from "./src/math.mjs";
multiply(3, 4); // 12
```

It also exports `subtract(a, b)`, which returns `a` minus `b`.

```js
import { subtract } from "./src/math.mjs";
subtract(10, 4); // 6
```

It also exports `clamp(value, min, max)`, which returns `min` when `value < min`, `max` when `value > max`, and `value` otherwise. It throws a `RangeError` when `min > max`.

```js
import { clamp } from "./src/math.mjs";
clamp(42, 0, 10); // 10
```

It also exports `mean(values)`, which returns the arithmetic mean of an array of numbers. It throws a `RangeError` when `values` is empty.

```js
import { mean } from "./src/math.mjs";
mean([2, 4, 6]); // 4
```

It also exports `sum(values)`, which returns the total of an array of numbers. It returns `0` when `values` is empty.

```js
import { sum } from "./src/math.mjs";
sum([1, 2, 3]); // 6
```

It also exports `square(x)`, which returns `x` times `x`.

```js
import { square } from "./src/math.mjs";
square(3); // 9
```

It also exports `median(values)`, which returns the middle value of the sorted numbers, or the mean of the two middle values when the count is even. It throws a `RangeError` when `values` is empty.

```js
import { median } from "./src/math.mjs";
median([3, 1, 2]); // 2
```

It also exports `max(values)`, which returns the largest number in an array of numbers. It throws a `RangeError` when `values` is empty.

```js
import { max } from "./src/math.mjs";
max([3, 9, 2]); // 9
```

It also exports `min(values)`, which returns the smallest number in an array. It throws a `RangeError` when `values` is empty.

```js
import { min } from "./src/math.mjs";
min([3, 9, 2]); // 2
```

It also exports `product(values)`, which returns the product of an array of numbers. It returns `1` when `values` is empty.

```js
import { product } from "./src/math.mjs";
product([2, 3, 4]); // 24
```

It also exports `abs(x)`, which returns `x` when it is zero or positive and `-x` when it is negative.

```js
import { abs } from "./src/math.mjs";
abs(-5); // 5
```

It also exports `sign(x)`, which returns `1` when `x` is greater than zero, `-1` when it is less than zero, and `0` when it is zero. For `NaN` or any input that is not a number it returns `NaN`, like `Math.sign`.

```js
import { sign } from "./src/math.mjs";
sign(-3); // -1
```

It also exports `lerp(a, b, t)`, which returns `a + (b - a) * t`, the point `t` of the way from `a` to `b`.

```js
import { lerp } from "./src/math.mjs";
lerp(0, 10, 0.5); // 5
```

It also exports `cube(x)`, which returns `x * x * x`.

```js
import { cube } from "./src/math.mjs";
cube(3); // 27
```

It also exports `isEven(n)`, which returns `true` when `n % 2 === 0` and `false` otherwise.

```js
import { isEven } from "./src/math.mjs";
isEven(4); // true
```

It also exports `factorial(n)`, which returns `n!`, the product `n * (n - 1) * ... * 1`, and `1` when `n` is `0`. It throws a `RangeError` when `n` is negative or not an integer.

```js
import { factorial } from "./src/math.mjs";
factorial(5); // 120
```

It also exports `gcd(a, b)`, which returns the greatest common divisor of the integers `a` and `b` as a non-negative number. The sign of either argument does not matter, and `gcd(0, 0)` is `0`.

```js
import { gcd } from "./src/math.mjs";
gcd(12, 18); // 6
```

It also exports `lcm(a, b)`, which returns the least common multiple of the integers `a` and `b` as a non-negative number. The sign of either argument does not matter, and it returns `0` when either argument is `0`. It throws a `RangeError` when `a` or `b` is not an integer.

```js
import { lcm } from "./src/math.mjs";
lcm(4, 6); // 12
```

## Stats command

`node src/stats.mjs` reads numbers from standard input and prints one JSON object with their `count`, `mean` and `median`.

```sh
printf '9\n-1 3 5\n' | node src/stats.mjs
# {"count":4,"mean":4,"median":4}
```

Numbers are separated by whitespace (spaces, tabs or newlines). Each has an optional sign, digits with an optional fraction, and an optional exponent, such as `-1.5`, `.5` or `1e3`. Hex, `Infinity`, `NaN` and trailing letters are not accepted.

On invalid input the command prints one message on standard error, prints nothing on standard output, and exits with status 1. This covers empty or whitespace-only input, malformed numbers, values that are not finite (such as `1e999`), and results that are not finite.
