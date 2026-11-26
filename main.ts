// Everyday Wonder — Two Days to Find the Line
// make.fun bounty entry (u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3).
// Writes one sentence (at most 200 characters) about a small moment of
// wonder in everyday life to /output/entry.txt and prints it.
//
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";

// One sentence: rain on a bus window, read as an alphabet the rider
// almost learns before their stop — ordinary, specific, and strange
// in a single read. Revised: "for three whole stops" grounds the
// wonder in a counted, real stretch of the ride.
const ENTRY: string =
  "The bus window turned the rain into a slow alphabet, and for three whole stops I almost learned to read it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
