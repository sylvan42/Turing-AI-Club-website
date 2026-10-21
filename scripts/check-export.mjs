import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";

const output = resolve(process.argv[2] || "out");
const base = "/Turing-AI-Club-website";
const pages = ["", "about", "learning", "team"];
const documents = new Map(
  pages.map((page) => [
    page,
    readFileSync(join(output, page, "index.html"), "utf8"),
  ]),
);

for (const [page, html] of documents) {
  assert.equal(
    [...html.matchAll(/<h1\b/g)].length,
    1,
    `${page || "home"}: one primary heading`,
  );
  assert.match(html, /id="main-content"/, "Skip link destination exists");
  assert.doesNotMatch(
    html,
    /\u2014|&mdash;|&#(?:8212|x2014);|AI, done here\./i,
    `${page || "home"}: retired slogan and em dashes stay out of the published pages`,
  );
  assert.match(html, /id="mobile-navigation"/, "Mobile navigation exists");
  assert.match(
    html,
    /aria-controls="mobile-navigation"/,
    "Menu controls its navigation",
  );
  assert.match(html, /aria-expanded="false"/, "Mobile menu starts closed");
  assert.match(
    html,
    /mailto:turingaiclub@gmail.com\?subject=Joining%20TuringAI%20Club/,
    "Membership action opens email",
  );

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(
    new Set(ids).size,
    ids.length,
    `${page || "home"}: no duplicate IDs`,
  );

  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    if (/^(mailto:|https?:)/.test(href)) continue;
    const url = new URL(
      href,
      `https://example.test${base}/${page ? page + "/" : ""}`,
    );
    assert.ok(
      url.pathname.startsWith(base + "/"),
      `Production link keeps base path: ${href}`,
    );
    const route = url.pathname.slice(base.length).replace(/^\/+|\/+$/g, "");
    const target = join(output, route, "index.html");
    assert.ok(existsSync(target), `Link resolves: ${href}`);
    if (url.hash) {
      const targetHtml = documents.get(route) ?? readFileSync(target, "utf8");
      assert.ok(
        targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `Anchor resolves: ${href}`,
      );
    }
  }
}

for (const id of [
  "about",
  "vision",
  "how-it-works",
  "tracks",
  "team",
  "join",
  "ideas",
]) {
  assert.ok(
    documents.get("").includes(`id="${id}"`),
    `Legacy home anchor remains: ${id}`,
  );
}
assert.match(documents.get("team"), /Dr\. Andrew Katumba/);
assert.match(documents.get("team"), /Zoora Harrison/);
assert.match(documents.get("learning"), /id="beginner"/);
assert.match(documents.get("learning"), /id="intermediate"/);
for (const id of ["transport", "weather", "budget"]) {
  assert.ok(
    documents.get("").includes(`href="#idea-${id}"`),
    `Hero idea links to its project example: ${id}`,
  );
}
console.log(
  "Export checks passed: four pages, navigation, anchors, membership, and content.",
);
