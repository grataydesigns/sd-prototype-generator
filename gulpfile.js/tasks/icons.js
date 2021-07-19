const fs = require('fs');
const path = require('path');
const { src, dest } = require('gulp');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

function getIconNames() {
  const iconDirectory = path.join(process.cwd(), 'src/icons/heroicons');
  let icons = [];

  if (fs.existsSync(iconDirectory)) {
    const iconFileNames = fs.readdirSync(iconDirectory);
    iconFileNames.sort().forEach((fn) => {
      if (fn.indexOf('.svg') !== -1) {
        icons.push(fn.substring(0, fn.length - 4));
      }
    });
  }
  return icons;
}

function generateIconDataFile(done) {
  const iconNames = getIconNames(),
    iconNamesJson = JSON.stringify(iconNames),
    dataDirectory = path.join(process.cwd(), 'src/data'),
    iconDataFilePath = path.join(dataDirectory, 'icons.json');

  if (iconNames.length > 0) {
    if (!fs.existsSync(dataDirectory)) {
      mkdirp.sync(dataDirectory);
    }

    fs.writeFileSync(iconDataFilePath, iconNamesJson);
  }
  done();
}

function iconSprite() {
  return src('src/icons/**/*.svg')
    .pipe(
      svgmin({
        plugins: [
          {
            removeAttrs: {
              attrs: ['fill', 'stroke'],
            },
          },
          {
            removeDimensions: true,
          },
        ],
      })
    )
    .pipe(dest('src/icons'))
    .pipe(svgstore())
    .pipe(dest('public/icons'));
}

// exports.iconSprite = iconSprite;
// exports.getIconNames = getIconNames;
module.exports = { iconSprite, generateIconDataFile };
