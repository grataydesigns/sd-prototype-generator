const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function compilejs() {
  return src('src/scripts/app.js')
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('public/js'));
}

exports.compilejs = compilejs;
