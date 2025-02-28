import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import path from "path";

// Change this to your website URL
const hostname = "https://beyondrenewables.in";

// Static routes (add all your pages here)
const staticRoutes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "monthly", priority: 0.8 },
  { url: "/solar-recycling", changefreq: "monthly", priority: 0.8 },
  { url: "/decommissioning", changefreq: "monthly", priority: 0.8 },
  { url: "/digitization", changefreq: "monthly", priority: 0.8 },
  { url: "/product", changefreq: "monthly", priority: 0.8 },
  { url: "/solar-pv-panel-recycling", changefreq: "monthly", priority: 0.8 },
  { url: "/solar-panel-waste", changefreq: "monthly", priority: 0.7 },
  { url: "/solar-panel-recyling", changefreq: "monthly", priority: 0.7 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.5 },
  { url: "/term-condition", changefreq: "yearly", priority: 0.5 },
];

// Merge all routes
const allRoutes = [...staticRoutes];

(async () => {
  const sitemap = new SitemapStream({ hostname });

  allRoutes.forEach(({ url, changefreq, priority }) => {
    sitemap.write({
      url,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    });
  });

  sitemap.end();

  const sitemapBuffer = await streamToPromise(sitemap);

  // Save sitemap.xml in the public folder so it's included in Vite's build
  writeFileSync(
    path.resolve("public", "sitemap.xml"),
    sitemapBuffer.toString()
  );

  console.log("✅ Sitemap generated successfully at public/sitemap.xml");
})();
