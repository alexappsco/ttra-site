/** next-sitemap.config.js */
const SITE_SUBTITLE = 'تترى';

module.exports = {
  siteUrl: '',
  generateRobotsTxt: false, // لأنك تملك robots.txt بالفعل
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*'], // أمثلة على صفحات لا تريد فهرستها
  siteMetadata: {
    title: '',
    subtitle: SITE_SUBTITLE,
  },
  alternateRefs: [
    { href: '/', hreflang: 'ar' },
    { href: '/', hreflang: 'en' },
  ],
};
