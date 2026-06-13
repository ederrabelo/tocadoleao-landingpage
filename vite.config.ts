import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function inlineBuiltCss(): Plugin {
  return {
    name: 'inline-built-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const cssAssets = new Map<string, string>()
      const inlinedCssFiles = new Set<string>()

      for (const asset of Object.values(bundle)) {
        if (asset.type === 'asset' && asset.fileName.endsWith('.css')) {
          cssAssets.set(asset.fileName, asset.source.toString())
        }
      }

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
          const css = cssAssets.get(cssFileName)

          if (!css) {
            continue
          }

          html = html.replace(match[0], `<style data-inline-css>${css}</style>`)
          inlinedCssFiles.add(cssFileName)
        }

        asset.source = html
      }

      for (const cssFileName of inlinedCssFiles) {
        delete bundle[cssFileName]
      }
    },
  }
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        historia: fileURLToPath(new URL('historia/index.html', import.meta.url)),
      },
    },
  },
  plugins: [react(), inlineBuiltCss()],
})
