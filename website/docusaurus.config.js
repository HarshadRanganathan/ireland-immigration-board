module.exports={
  "title": "Ireland Immigration",
  "tagline": "Your immigration, visa and work permit queries answered by the community",
  "url": "https://harshadranganathan.github.io/ireland-immigration-board/",
  "baseUrl": "/",
  "organizationName": "harshadranganathan",
  "projectName": "ireland-immigration-board",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    {
      "src": "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=2435890546711147&autoLogAppEvents=1",
      "async": true,
      "defer": true,
      "nonce": "akMR67V2",
      "crossOrigin": "anonymous"
    }
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "facebookAppId": "2435890546711147"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "docs",
          "sidebarPath": require.resolve('./sidebars.json'),
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": require.resolve('./src/css/customTheme.css'),
        },
        "gtag": {
          "trackingID": "G-D64X8XCF46"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Ireland Immigration",
      "logo": {
        "src": "img/favicon.ico"
      },
      "items": [
        {
          "to": "docs/irp",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "docs/help",
          "label": "Help",
          "position": "left"
        },
        {
          "href": "https://github.com/HarshadRanganathan/ireland-immigration-board",
          "label": "Github",
          "position": "left"
        },
        {
          "href": "https://ko-fi.com/harshadranganathan",
          "label": "Buy me a coffee",
          "position": "left"
        },
        {
          "type": "localeDropdown",
          "position": "left",
        }
      ]
    },
    "image": "img/favicon.ico",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022 Harshad Ranganathan",
      "logo": {
        "src": "img/favicon.ico"
      }
    },
    "algolia": {
      "appId": "QNLB7B9X9L",
      "apiKey": "4255f4b32aaaa79b8c03f14b78d30be7",
      "indexName": "harshadranganathan_ireland-immigration-board"
    },
    "i18n": {
      "defaultLocale": 'en',
      "locales": ['en', 'fr', 'ar', 'zh', 'de', 'es', 'it', 'ja', 'pl', 'pt', 'ro', 'ru']
    },
  }
}