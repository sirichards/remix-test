
import defaults from "~/config.json"
export async function loader() {
  const { manifest } = defaults
  const json = `
  {
    "name": "${manifest.name}",
    "short_name": "${manifest.short_name}",
    "start_url": "/",
    "icons": [${manifest.icons.map(icon => { 
      return JSON.stringify(icon)
    })}],
    "theme_color": "${manifest.theme_color}",
    "background_color": "${manifest.background_color}",
    "display": "minimal-ui"
  }`
    
  return new Response(json, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}