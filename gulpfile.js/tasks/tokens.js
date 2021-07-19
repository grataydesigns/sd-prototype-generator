const path = require('path');
const chroma = require('chroma-js');
const source = path.resolve(__dirname, '../../src');
const buildPath = path.resolve(__dirname, '../../src');

const colorTransform = (token) => {
  const { value, modify = [] } = token;
  let color = chroma(value);

  // iterate over the modify array
  // and apply each modification in order
  modify.forEach(({ type, amount }) => {
    // modifier type must match a method name in chromajs
    // https://gka.github.io/chroma.js/
    // chroma methods can be chained, so each time we override the color variable
    // we can still call other chroma methods, similar to
    // chroma(value).brighten(1).darken(1).hex();
    color = color[type](amount);
  });
  return color.css();
};

const StyleDictionary = require('style-dictionary').extend({
  source: [`${source}/tokens/tokens.js`],
  platforms: {
    scss: {
      transformGroup: 'scss',
      transforms: [
        `attribute/cti`,
        `name/cti/kebab`,
        `size/rem`,
        `colorTransform`,
        `color/css`,
      ],
      buildPath: `${buildPath}/tokens/`,
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/map-deep',
          mapName: 'tokens',
        },
      ],
    },
    javascript: {
      transformGroup: 'js',
      transforms: [
        `attribute/cti`,
        `name/cti/kebab`,
        `size/rem`,
        `colorTransform`,
        `color/css`,
      ],
      buildPath: `${buildPath}/data/`,
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
});

StyleDictionary.registerTransform({
  type: `value`,
  name: 'colorTransform',
  transitive: true,
  matcher: (token) => token.attributes.category === 'color' && token.modify,
  transformer: colorTransform,
});

function cleanTokens(cb) {
  StyleDictionary.cleanAllPlatforms();
  cb();
}

function tokens(cb) {
  StyleDictionary.buildAllPlatforms();
  cb();
}

module.exports = { tokens, cleanTokens };
