import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function inlineBuiltCss(): Plugin {
  return {
    name: 'inline-built-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const asset of Object.values(bundle)) {
        if (asset.type !== 'asset' || !asset.fileName.endsWith('.html')) {
          continue
        }

        let html = asset.source.toString()
        const cssLinks = html.matchAll(
          /<link rel="stylesheet" crossorigin href="\/([^"]+\.css)">/g,
        )

        for (const match of cssLinks) {
          const [, cssFileName] = match
          const cssAsset = bundle[cssFileName]

          if (!cssAsset || cssAsset.type !== 'asset') {
            continue
          }

          const css = cssAsset.source.toString()
          html = html.replace(match[0], `<style data-inline-css>${css}</style>`)
          delete bundle[cssFileName]
        }

        asset.source = html
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), inlineBuiltCss()],
})
