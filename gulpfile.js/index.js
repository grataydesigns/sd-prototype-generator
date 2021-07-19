const { series, watch, parallel } = require('gulp');

const { clean } = require('./tasks/clean');
const { compileHtml, concatenateMacros } = require('./tasks/compilehtml');
const { compilejs } = require('./tasks/compilejs');
const { iconSprite, generateIconDataFile } = require('./tasks/icons');
const { styles } = require('./tasks/styles');
const { cleanTokens, tokens } = require('./tasks/tokens');
const { reload, server } = require('./tasks/server');

function watchTask(cb) {
  watch(
    ['src/styles/**/*.scss', 'src/components/**/*.scss'],
    series(styles, reload)
  );
  watch(
    ['src/pages/**/*.nunjucks', 'src/templates/*.nunjucks'],
    series(compileHtml, reload)
  );
  watch(
    'src/components/**/*.nunjucks',
    series(concatenateMacros, compileHtml, reload)
  );
  watch('icons/**/*.svg', parallel(iconSprite, generateIconDataFile));
  cb();
}

exports.cleanTokens = cleanTokens;
exports.tokens = tokens;
exports.concatenateMacros = concatenateMacros;
exports.iconSprite = iconSprite;
exports.generateIconDataFile = generateIconDataFile;

exports.build = series(
  clean,
  compilejs,
  iconSprite,
  generateIconDataFile,
  tokens,
  styles,
  concatenateMacros,
  compileHtml
);

exports.default = series(
  clean,
  compilejs,
  iconSprite,
  generateIconDataFile,
  tokens,
  styles,
  concatenateMacros,
  compileHtml,
  server,
  watchTask
);
