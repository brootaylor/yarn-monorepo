const fs = require('fs');

// A useful way to reference the website we are wanting eleventy to build / output
let website = 'workspace-a';

module.exports = {
  notify: true,
  watch: true,
  browser: ['google chrome'],
  open: 'local',
  server: `/${website}/dist/`,
  startPath: `/`,
  logPrefix: `${website} website`,
  logLevel: 'debug',
  callbacks: {
    ready(err, browserSync) {
      const content404 = fs.readFileSync(`/${website}/dist/404/`);

      browserSync.addMiddleware('*', (req, res) => {
        // Provides the 404 content without redirect.
        res.write(content404);
        res.end();
      });
    },
  },
  ui: {
    port: 8080
  },
  ghostMode: false
};
