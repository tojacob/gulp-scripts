const { src, dest } = require('gulp'),
  breakFile = require('./breakFile');

function fileToSplit(cb) {
  return src('./src/largeFile')
    .pipe(
      breakFile({
        splitAttribute: {
          exp: '_fin_',
          flags: 'g'
        },
        file: {
          name: 'chapter',
          separator: '_',
          type: 'txt'
        },
        showParts: true
      })
    )
    .pipe(dest('./build'));
}

exports.default = fileToSplit;
