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

It also exports `sign(x)`, which returns `1` when `x` is greater than zero, `-1` when it is less than zero, and `0` when it is zero.

```js
import { sign } from "./src/math.mjs";
sign(-3); // -1
```
