import { test } from "node:test";
import assert from "node:assert/strict";
import { add, multiply, subtract } from "../src/math.mjs";

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
