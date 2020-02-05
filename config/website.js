const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Kabuto Studio", // Navigation and Site Title
  siteTitleAlt: "Kabuto", // Alternative Site title for SEO
  siteTitleShort: "Kabuto", // short_name for manifest
  siteHeadline: "Agência de Design Gráfico", // Headline for schema.org JSONLD
  siteUrl: "https://kabutostudio.com", // Domain of your site. No trailing slash!
  siteLanguage: "pt-br", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Agência de Design Gráfico",
  author: "GrowthMedia", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@kabutostudio", // Twitter Username
  ogSiteName: "kabutostudio", // Facebook Site Name
  ogLanguage: "pt_BR", // Facebook Language
  googleAnalyticsID: "UA-12345",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
