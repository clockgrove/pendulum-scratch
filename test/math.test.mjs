import { test } from "node:test";
import assert from "node:assert/strict";
import { add, clamp, mean, multiply, square, subtract, sum } from "../src/math.mjs";

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
