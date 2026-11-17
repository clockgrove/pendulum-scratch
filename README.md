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
