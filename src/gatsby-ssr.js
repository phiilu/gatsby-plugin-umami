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
    "data-auto-track": pluginOptions.autoTrack || "true",
    "data-do-not-track": pluginOptions.doNotTrack || "true"
  }

  return setPostBodyComponents([<script async defer {...options} />])
}