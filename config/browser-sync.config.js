const fs = require('fs');

module.exports = {
  notify: true,
  watch: true,
  browser: ['google chrome'],
  open: 'local',
  server: `dist/`,
  startPath: `/`,
  logLevel: 'debug',
  callbacks: {
    ready(err, browserSync) {
      const content404 = fs.readFileSync(`dist/404/index.html`);

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
