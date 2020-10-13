import React from "react"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const includeInDevelopment = !!pluginOptions.includeInDevelopment
  const isEnabled = includeInDevelopment || process.env.NODE_ENV === "production"

  if (!isEnabled) {
    return null
  }

  const options = {
    src: pluginOptions.srcUrl,
    "data-website-id": pluginOptions.websiteId,
    "data-auto-track": 'autoTrack' in pluginOptions ? pluginOptions.autoTrack : true,
    "data-do-not-track": 'respectDoNotTrack' in pluginOptions ? pluginOptions.respectDoNotTrack : true
  }

  return setPostBodyComponents([<script key="gastby-plugin-umami" async defer {...options} />])
}
