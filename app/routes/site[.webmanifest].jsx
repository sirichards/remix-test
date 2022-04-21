
import defaults from "~/config.json"
export async function loader() {
  const json = `
  {
    "name": "${defaults.name}",
    "short_name": "${defaults.short_name}",
    "icons": [
      {
        "src": "/favicons/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/favicons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "${defaults.theme_color}",
    "background_color": "${defaults.background_color}",
    "display": "standalone"
  }`
    
  return new Response(json, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}