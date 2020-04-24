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
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Vicksburg Family Dentistry'
      return args
    })
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
