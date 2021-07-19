const del = require('del');

function clean() {
    return del(['public/**', '!public'])
}

exports.clean = clean;
