const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],

        postProcess(route) {
          route.html = route.html.replace('</script><div>', '</script><div id="vicksburg-family-dentistry" data-server-rendered="true">');

          return route;
        },

        renderer: new Renderer({
          headless: true,
          renderAfterDocumentEvent: 'render-event',
        }),
      }),
    ],
  },
  /*pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, '<script $1 defer>')
          .replace('id="app"', 'id="app" data-server-rendered="true"');
        return route;
      }
    }
  },*/
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
