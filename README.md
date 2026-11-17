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
