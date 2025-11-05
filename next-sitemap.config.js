/** next-sitemap.config.js */
module.exports = {
  siteUrl: 'https://isthwath.com',
  generateRobotsTxt: false, // لأنك تملك robots.txt بالفعل
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*'], // أمثلة على صفحات لا تريد فهرستها
  alternateRefs: [
    { href: 'https://isthwath.com/en/', hreflang: 'en' },
    { href: 'https://isthwath.com/ar/', hreflang: 'ar' },
  ],
};
