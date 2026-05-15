/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://melbournepds.opeds.app",
  generateRobotsTxt: true,
  exclude: ["/dashboard", "/dashboard/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/dashboard"] },
    ],
    additionalSitemaps: ["https://melbournepds.opeds.app/sitemap.xml"],
  },
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/locations": 0.9,
      "/contact": 0.8,
      "/about": 0.7,
    };
    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
