// main.ts — copies POST.json to the output directory.
// Node 22, standard library only. No network, no clock, no files outside
// the repository. The two runs of an entry write the same bytes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "POST.json");
const text = readFileSync(source, "utf8");
const post = JSON.parse(text) as unknown;
if (typeof post !== "object" || post === null || typeof (post as { url?: unknown }).url !== "string") {
  throw new Error("POST.json must be an object with a string url");
}
const url = (post as { url: string }).url;
if (!/^https:\/\/(x\.com|twitter\.com|www\.x\.com|mobile\.twitter\.com)\/\w+\/status\/\d+$/.test(url)) {
  throw new Error("POST.json url must be an X post address: https://x.com/<handle>/status/<id>");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
