# gatsby-plugin-umami
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Easily add [Umami](https://umami.is/) to your Gatsby site.

## Install
`npm install --save gatsby-plugin-umami`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-umami`,
    options: {
      websiteId: 'UMAMI_WEBSITE_ID',
      srcUrl: 'https://umami.example.com/umami.js',
      includeInDevelopment: false,
      autoTrack: true,
      respectDoNotTrack: true
    },
  },
]
```

## Configuration

- `websiteId` - Required. The website id of your umami site
- `srcUrl` - Required. The url to the hosted `umami.js`
- `includeInDevelopment` - Optional. Defaults to `false`
- `autoTrack` - Optional. Enables [umami auto track](https://umami.is/docs/tracker-config) feature. Defaults to `true`
- `respectDoNotTrack` - Optional. Enables [umami respect Do Not Track](https://umami.is/docs/tracker-config) feature. Defaults to `true`



## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://morehumaninternet.org"><img src="https://avatars.githubusercontent.com/u/6589960?v=4?s=100" width="100px;" alt=""/><br /><sub><b>William Weiss</b></sub></a><br /><a href="https://github.com/phiilu/gatsby-plugin-umami/commits?author=will-weiss" title="Code">💻</a></td>
    <td align="center"><a href="http://mattbanner.co.uk"><img src="https://avatars.githubusercontent.com/u/49304331?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matt Banner</b></sub></a><br /><a href="https://github.com/phiilu/gatsby-plugin-umami/issues?q=author%3Amattsbanner" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://phiilu.com"><img src="https://avatars.githubusercontent.com/u/8149519?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Florian Kapfenberger</b></sub></a><br /><a href="#question-phiilu" title="Answering Questions">💬</a> <a href="https://github.com/phiilu/gatsby-plugin-umami/commits?author=phiilu" title="Documentation">📖</a> <a href="https://github.com/phiilu/gatsby-plugin-umami/pulls?q=is%3Apr+reviewed-by%3Aphiilu" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/phiilu/gatsby-plugin-umami/commits?author=phiilu" title="Code">💻</a> <a href="#tool-phiilu" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!