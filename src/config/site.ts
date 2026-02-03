import * as v from "valibot";

const siteConfigSchema = v.object({
  name: v.string(),
  url: v.pipe(v.string(), v.url()),
  ogImage: v.string(),
  description: v.string(),
  links: v.object({
    twitter: v.pipe(v.string(), v.url()),
    github: v.pipe(v.string(), v.url())
  })
});

export type SiteConfig = v.InferOutput<typeof siteConfigSchema>;

export const siteConfig: SiteConfig = {
  name: "Kame / カメ",
  url: "https://kame.dev",
  ogImage: "https://kame.dev/og-image.png",
  description:
    "Steady components, robust shells, and timeless motion for the modern web.",
  links: {
    twitter: "https://x.com/semicologne13",
    github: "https://github.com/dontforgetsemicologne/kamedotdev"
  }
};
