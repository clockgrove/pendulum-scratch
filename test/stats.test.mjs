import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(new URL("../src/stats.mjs", import.meta.url));

function run(input) {
  return spawnSync(process.execPath, [script], { input, encoding: "utf8" });
}

function ok(input) {
  const result = run(input);
  assert.equal(result.status, 0, result.stderr);
  return JSON.parse(result.stdout);
}

test("--help prints usage", () => {
  // NODE_USE_ENV_PROXY makes Node print an experimental-feature warning on
  // stderr; drop it so the assertion sees only the command's own output.
  const env = { ...process.env, NODE_USE_ENV_PROXY: undefined };
  const result = spawnSync(process.execPath, [script, "--help"], { encoding: "utf8", env });
  assert.equal(result.status, 0);
  assert.equal(result.stdout, "Usage: node src/stats.mjs [--help] < numbers.txt\n");
  assert.equal(result.stderr, "");
});

test("mixed whitespace input", () => {
  const result = run("9\n-1\t3  5\n");
  assert.equal(result.status, 0);
  assert.equal(result.stdout, '{"count":4,"mean":4,"median":4}\n');
});

test("odd count", () => {
  assert.deepEqual(ok("3 1 2"), { count: 3, mean: 2, median: 2 });
});

test("even count", () => {
  assert.deepEqual(ok("1 2 3 10"), { count: 4, mean: 4, median: 2.5 });
});

test("signed, fractional and scientific numbers", () => {
  assert.deepEqual(ok("-1.5 +2.5 .5 1e1"), { count: 4, mean: 2.875, median: 1.5 });
});

test("large values stay finite", () => {
  const result = ok("1e308 1e308");
  assert.equal(result.mean, 1e308);
  assert.equal(result.median, 1e308);
});

const MAX = "1.7976931348623157e308";

test("three largest finite values stay finite", () => {
  assert.deepEqual(ok(`${MAX} ${MAX} ${MAX}`), {
    count: 3,
    mean: Number.MAX_VALUE,
    median: Number.MAX_VALUE,
  });
});

test("three most negative finite values stay finite", () => {
  assert.deepEqual(ok(`-${MAX} -${MAX} -${MAX}`), {
    count: 3,
    mean: -Number.MAX_VALUE,
    median: -Number.MAX_VALUE,
  });
});

test("largest finite values of both signs average to zero", () => {
  assert.deepEqual(ok(`${MAX} ${MAX} -${MAX} -${MAX}`), { count: 4, mean: 0, median: 0 });
});

const invalid = [
  ["", /^stats: no numbers on standard input$/m],
  [" \n\t ", /^stats: no numbers on standard input$/m],
  ["3x", /^stats: malformed number: 3x$/m],
  ["1 abc", /^stats: malformed number: abc$/m],
  ["Infinity", /^stats: malformed number: Infinity$/m],
  ["NaN", /^stats: malformed number: NaN$/m],
  ["0x10", /^stats: malformed number: 0x10$/m],
  ["1e999", /^stats: value is not finite: 1e999$/m],
];

for (const [input, message] of invalid) {
  test(`rejects ${JSON.stringify(input)}`, () => {
    const result = run(input);
    assert.equal(result.status, 1);
    assert.equal(result.stdout, "");
    assert.match(result.stderr, message);
  });
}
