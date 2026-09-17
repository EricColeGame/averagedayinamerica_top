export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "tips", path: "/tips", isContentType: true },
] as const satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
