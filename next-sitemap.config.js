/** next-sitemap.config.js */
const SITE_SUBTITLE = 'منصة استحواذ هي منصتك الذكية لبيع وشراء الأنشطة التجارية';

module.exports = {
  siteUrl: 'https://isthwath.com',
  generateRobotsTxt: false, // لأنك تملك robots.txt بالفعل
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*'], // أمثلة على صفحات لا تريد فهرستها
  siteMetadata: {
    title: 'منصة استحواذ',
    subtitle: SITE_SUBTITLE,
  },
  alternateRefs: [
    { href: 'https://isthwath.com/ar/', hreflang: 'ar' },
    { href: 'https://isthwath.com/en/', hreflang: 'en' },
  ],
};
