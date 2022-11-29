const gulp = require('gulp');
const { argv } = require('yargs');
const validator = require('gulp-html');
const through = require('through2');
const ansi = require('ansi');

const { paths, baseDir } = require('./utils');

const cursor = ansi(process.stdout);

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|   w3c validation for HTML
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('validation', () => {
  const dir = argv.dir ? argv.dir : paths.pug.dest;
  let htmlfiles = `${baseDir}/${dir}/**/*.html`;
  if (argv.html) {
    htmlfiles = `${paths.dir.dev}/${argv.html}.html`;
    cursor.hex('#00ffff').bold();
    console.log('html: ', htmlfiles);
    cursor.reset();
  }

  return gulp
    .src(htmlfiles)
    .pipe(validator())
    .pipe(
      through.obj((file, enc, cb) => {
        console.log({
          file: file.path.split('\\').pop(),
          status: 'success',
        });
        cb(null, file);
      })
    )
    .pipe(gulp.dest('dist/'));
});

gulp.task('w3c', gulp.series('pug', 'validation'));
