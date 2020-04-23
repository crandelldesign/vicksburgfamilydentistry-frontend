const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  },
  css: {
    extract: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
      },
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        //target: 'http://localhost:23080/repair-connection-core-api',
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true, // proxy websockets
        pathRewrite: {
          '^/api': '', // rewrite path
        }
      }
    }
  }
}
