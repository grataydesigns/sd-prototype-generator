const browserSync = require('browser-sync').create();

function server(cb) {
  browserSync.init({
    server: {
      baseDir: './public',
    },
  });
  cb();
}

function reload(cb) {
  browserSync.reload();
  cb();
}

exports.server = server;
exports.reload = reload;
