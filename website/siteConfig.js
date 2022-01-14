/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Ireland Immigration', // Title for your website.
  tagline: 'Your immigration, visa and work permit queries answered by the community',
  url: 'https://harshadranganathan.github.io/ireland-immigration-board/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
    // url: 'https://harshadranganathan.github.io',
    // baseUrl: '/ireland-immigration-board/',

  // Used for publishing and more
  projectName: 'ireland-immigration-board',
  organizationName: 'harshadranganathan',
  cname: 'ireland-immigration.rharshad.com',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'irp', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {href: 'https://github.com/HarshadRanganathan/ireland-immigration-board', label: 'Github'},
    {href: 'https://ko-fi.com/harshadranganathan', label: 'Buy me a coffee'}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  gaTrackingId: 'G-D64X8XCF46',
  gaGtag: true,

  algolia: {
    apiKey: '600721e219403d3bcd71c5c9a32f2361',
    indexName: 'harshadranganathan_ireland-immigration-board'
  },

  /* Colors for website */
  colors: {
    primaryColor: '#009A49',
    secondaryColor: '#FF7900',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Harshad Ranganathan`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    {
      src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=2435890546711147&autoLogAppEvents=1',
      async: true,
      defer: true,
      nonce: 'akMR67V2',
      crossOrigin: 'anonymous'
    }
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/favicon.ico',
  twitterImage: 'img/favicon.ico',

  facebookAppId: '2435890546711147',
  facebookComments: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
