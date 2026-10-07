import type { MoneyPage } from "./types";
import { parentPath } from "./types";
import { mobilePages } from "./mobile";
import { placePages } from "./places";
import { saasPages } from "./saas";
import { softwarePages } from "./software";
import { solutionPages } from "./solutions";
import { webPages } from "./web";

export type { MoneyPage } from "./types";
export { childrenOf, crumbsFor } from "./types";

export const moneyPages: MoneyPage[] = [
  ...softwarePages,
  ...webPages,
  ...saasPages,
  ...mobilePages,
  ...solutionPages,
  ...placePages,
];

function assertPages(pages: MoneyPage[]) {
  const paths = new Set<string>();
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  const headings = new Set<string>();
  for (const page of pages) {
    if (paths.has(page.path)) throw new Error(`Duplicate path ${page.path}`);
    if (titles.has(page.title)) throw new Error(`Duplicate title ${page.title}`);
    if (descriptions.has(page.description)) throw new Error(`Duplicate description ${page.path}`);
    if (headings.has(page.h1)) throw new Error(`Duplicate h1 ${page.h1}`);
    paths.add(page.path);
    titles.add(page.title);
    descriptions.add(page.description);
    headings.add(page.h1);
    const parent = parentPath(page.path);
    if (parent && parent !== "solutions" && !pages.some((item) => item.path === parent)) {
      throw new Error(`Missing parent for ${page.path}`);
    }
  }
}

assertPages(moneyPages);

export function getMoneyPage(path: string) {
  return moneyPages.find((page) => page.path === path);
}

export function entryPages() {
  return moneyPages.filter((page) => {
    const parent = parentPath(page.path);
    return parent === null || parent === "solutions";
  });
}
