export type MoneyBlock = {
  h: string;
  p?: string[];
  items?: string[];
  heads?: [string, string];
  table?: { point: string; a: string; b: string }[];
};

export type MoneyPage = {
  path: string;
  group: string;
  crumb: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  cta: string;
  lede: string;
  blocks: MoneyBlock[];
  faqs: { q: string; a: string }[];
  proof: { href: string; title: string; note: string }[];
  links: { href: string; label: string }[];
  schema: "service" | "article";
};

export function parentPath(path: string) {
  const cut = path.lastIndexOf("/");
  return cut === -1 ? null : path.slice(0, cut);
}

export function crumbsFor(page: MoneyPage, pages: MoneyPage[]) {
  const byPath = new Map(pages.map((item) => [item.path, item]));
  const crumbs: { href: string; name: string }[] = [{ href: "/", name: "Accueil" }];
  const parts = page.path.split("/");
  for (let i = 1; i <= parts.length; i += 1) {
    const path = parts.slice(0, i).join("/");
    const found = byPath.get(path);
    if (found) crumbs.push({ href: `/${found.path}`, name: found.crumb });
  }
  return crumbs;
}

export function childrenOf(page: MoneyPage, pages: MoneyPage[]) {
  const prefix = `${page.path}/`;
  return pages.filter((item) => item.path.startsWith(prefix) && !item.path.slice(prefix.length).includes("/"));
}
