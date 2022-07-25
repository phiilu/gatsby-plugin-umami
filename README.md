# gatsby-plugin-umami

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
      respectDoNotTrack: true,
      dataCache: false,
      dataDomains: 'example.com,example2.com'
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
- `dataCache` - Optional. Improves performance. Defaults to `false`
- `dataDomains` - Optional. Allows tracking only on the specified domains. No default.


