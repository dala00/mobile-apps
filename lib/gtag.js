export const GA_TRACKING_ID = 'G-1ZQQVN4YRT'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action, category, label, value) => {
  const data = {
    event_category: category,
    event_label: label,
  }
  if (value) {
    data.value = value
  }
  window.gtag('event', action, data)
}
