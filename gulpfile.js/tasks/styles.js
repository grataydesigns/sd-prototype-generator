const { src, dest } = require('gulp');
const sass = require('gulp-sass');

function styles() {
  return src('src/styles/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(dest('public/styles', { sourcemaps: '.' }));
}

exports.styles = styles;
