import { test } from "node:test";
import assert from "node:assert/strict";
import { abs, add, clamp, cube, lerp, max, mean, median, min, multiply, product, sign, square, subtract, sum } from "../src/math.mjs";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("multiply", () => {
  assert.equal(multiply(3, 4), 12);
  assert.equal(multiply(-2, 5), -10);
  assert.equal(multiply(7, 0), 0);
});

test("subtract", () => {
  assert.equal(subtract(10, 4), 6);
  assert.equal(subtract(4, 10), -6);
  assert.equal(subtract(-3, -3), 0);
});

test("clamp", () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-3, 0, 10), 0);
  assert.equal(clamp(42, 0, 10), 10);
  assert.equal(clamp(7, 7, 7), 7);
  assert.throws(() => clamp(1, 10, 0), RangeError);
});

test("mean", () => {
  assert.equal(mean([2, 4, 6]), 4);
  assert.equal(mean([5]), 5);
  assert.equal(mean([-1, 1]), 0);
  assert.equal(mean([1, 2]), 1.5);
  assert.throws(() => mean([]), (err) => err instanceof RangeError && err.message.includes("empty"));
});

test("sum", () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([]), 0);
  assert.equal(sum([-4, 4]), 0);
  assert.equal(sum([2.5, 2.5]), 5);
});

test("square", () => {
  assert.equal(square(3), 9);
  assert.equal(square(-4), 16);
  assert.equal(square(0), 0);
  assert.equal(square(1.5), 2.25);
});

test("median", () => {
  assert.equal(median([3, 1, 2]), 2);
  assert.equal(median([4, 1, 3, 2]), 2.5);
  assert.equal(median([7]), 7);
  const input = [3, 1, 2];
  median(input);
  assert.deepEqual(input, [3, 1, 2]);
  assert.throws(() => median([]), RangeError);
  assert.throws(() => median([]), (err) => err.message.includes("empty"));
});

test("max", () => {
  assert.equal(max([3, 9, 2]), 9);
  assert.equal(max([-5, -1, -9]), -1);
  assert.equal(max([4]), 4);
  assert.throws(() => max([]), RangeError);
  assert.throws(() => max([]), (err) => err.message.includes("empty"));
});

test("min", () => {
  assert.equal(min([3, 9, 2]), 2);
  assert.equal(min([-5, -1, -9]), -9);
  assert.equal(min([4]), 4);
  assert.throws(() => min([]), RangeError);
  assert.throws(() => min([]), (err) => err.message.includes("empty"));
});

test("product", () => {
  assert.equal(product([2, 3, 4]), 24);
  assert.equal(product([-2, 5]), -10);
  assert.equal(product([7]), 7);
  assert.equal(product([]), 1);
});

test("abs", () => {
  assert.equal(abs(5), 5);
  assert.equal(abs(-5), 5);
  assert.equal(abs(0), 0);
  assert.equal(abs(-2.5), 2.5);
});

test("sign", () => {
  assert.equal(sign(7), 1);
  assert.equal(sign(-3), -1);
  assert.equal(sign(0), 0);
  assert.equal(sign(0.5), 1);
  assert.ok(Number.isNaN(sign(NaN)));
  assert.ok(Number.isNaN(sign(undefined)));
});

test("lerp", () => {
  assert.equal(lerp(0, 10, 0.5), 5);
  assert.equal(lerp(2, 4, 0), 2);
  assert.equal(lerp(2, 4, 1), 4);
  assert.equal(lerp(10, 0, 0.25), 7.5);
});

test("cube", () => {
  assert.equal(cube(3), 27);
  assert.equal(cube(-2), -8);
  assert.equal(cube(0), 0);
  assert.equal(cube(0.5), 0.125);
});
