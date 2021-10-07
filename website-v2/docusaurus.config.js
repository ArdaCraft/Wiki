module.exports={
  "title": "ArdaCraft Wiki",
  "tagline": "Docs and Information",
  "url": "https://wiki.ardacraft.me",
  "baseUrl": "/",
  "organizationName": "ArdaCraft",
  "projectName": "Wiki",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.png",
  "customFields": {},
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "intro",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "..\\docs",
          "sidebarPath": "..\\website-v1\\sidebars.json"
        },
        "blog": {},
        "theme": {
          "customCss": "..\\src\\css\\customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "ArdaCraft Wiki",
      "logo": {
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://ardacraft.me",
          "label": "Home",
          "position": "left"
        },
        {
          "href": "https://forums.ardacraft.me",
          "label": "Forums",
          "position": "left"
        }
      ]
    },
    "image": "img/logo.png",
    "footer": {
      "links": [],
      "copyright": "© 2021 ArdaCraft. All Rights Reserved.",
      "logo": {
        "src": "img/logo.png"
      }
    }
  }
}