const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const clone = require('gulp-clone');
const merge = require('merge-stream');
const webpackStream = require('webpack-stream');

const {
  paths,
  baseDir,
  browserSync: { reload },
  isProd,
} = require('./utils.js');
const gulpIf = require('gulp-if');

/* -------------------------------------------------------------------------- */
/*                       JavaScript Compile with Webpack                      */
/* -------------------------------------------------------------------------- */
gulp.task('script:webpack', () => {
  return gulp
    .src(`./src/js/theme.js`)
    .pipe(
      webpackStream({
        mode: 'development',
        entry: {
          'emoji-button': './src/js/emoji-button.js',
          flatpickr: './src/js/flatpickr.js',
        },
        output: {
          filename: '[name].js',
        },
      })
    )
    .pipe(gulp.dest(`${baseDir}/assets/js`));
});

/* -------------------------------------------------------------------------- */
/*                             JavaScript Compile                             */
/* -------------------------------------------------------------------------- */

gulp.task('script', () => {
  /* ------------------------------ Theme script ------------------------------ */

  const sourceStream = gulp.src(paths.script.src);
  const jsStream = sourceStream
    .pipe(clone())
    // .pipe(sourcemaps.init()
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(concat('theme.js'))
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel());

  const compressedStream = jsStream
    .pipe(clone())
    .pipe(uglify())
    .pipe(rename('theme.min.js'));

  /* -------------------------- Config Navbar Script -------------------------- */

  const sourceNavbar = gulp.src(paths.script.configNavbar);
  const navbarStream = sourceNavbar
    .pipe(clone())
    // .pipe(sourcemaps.init())
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(concat('config.js'))
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel());

  const compressedNavbar = navbarStream
    .pipe(clone())
    .pipe(uglify())
    .pipe(rename('config.js'));

  /* -------------------------- Config Navbar Script -------------------------- */

  const sourceEchartsExample = gulp.src(paths.script.echartsExample);
  const echartExampleStream = sourceEchartsExample
    .pipe(clone())
    // .pipe(sourcemaps.init())
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(concat('echarts-example.js'))
    .pipe(replace(/^(export|import).*/gm, ''))
    .pipe(babel());

  const compressedEchartExample = echartExampleStream
    .pipe(clone())
    .pipe(uglify())
    .pipe(rename('echart-example.js'));

  return (
    merge(
      jsStream,
      compressedStream,
      navbarStream,
      compressedNavbar,
      echartExampleStream,
      compressedEchartExample
    )
      // .pipe(sourcemaps.write('.'))
      .pipe(gulpIf(!isProd, sourcemaps.write('.')))
      .pipe(gulp.dest(`${baseDir}/${paths.script.dest}`))
      .on('end', () => {
        reload();
      })
  );
});
