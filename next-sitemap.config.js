/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  siteUrl:
    (process.env.NEXT_PUBLIC_SITE_DOMAIN || '') + (process.env.NEXT_PUBLIC_BASE_URL || '') ||
    'https://www.example.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  trailingSlash: true,
};
