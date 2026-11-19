import { readFileSync } from "node:fs";
import { mean, median } from "./math.mjs";

const NUMBER = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;

function parse(text) {
  const trimmed = text.trim();
  if (trimmed === "") {
    throw new Error("stats: no numbers on standard input");
  }
  return trimmed.split(/\s+/).map((token) => {
    if (!NUMBER.test(token)) {
      throw new Error(`stats: malformed number: ${token}`);
    }
    const value = Number(token);
    if (!Number.isFinite(value)) {
      throw new Error(`stats: value is not finite: ${token}`);
    }
    return value;
  });
}

function compute(values) {
  const count = values.length;
  let m = mean(values);
  if (!Number.isFinite(m)) {
    m = values.reduce((total, x) => total + x / count, 0);
  }
  let med = median(values);
  if (!Number.isFinite(med)) {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = count / 2;
    med = sorted[mid - 1] / 2 + sorted[mid] / 2;
  }
  if (!Number.isFinite(m) || !Number.isFinite(med)) {
    throw new Error("stats: result is not finite");
  }
  return { count, mean: m, median: med };
}

try {
  const output = compute(parse(readFileSync(0, "utf8")));
  process.stdout.write(JSON.stringify(output) + "\n");
} catch (error) {
  process.stderr.write(error.message + "\n");
  process.exitCode = 1;
}
