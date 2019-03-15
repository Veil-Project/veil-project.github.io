var browserSync = require('browser-sync');
var tailwindcss = require('tailwindcss');
var gulp        = require('gulp');
var postcss     = require('gulp-postcss');
var purgecss    = require('gulp-purgecss');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var svgmin      = require('gulp-svgmin');
var svgstore    = require('gulp-svgstore');
var rename      = require('gulp-rename');
var atimport    = require('postcss-import');
var nested      = require('postcss-nested');
var cp          = require('child_process');
var hashsum     = require("gulp-hashsum");
var gulpif      = require('gulp-if');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

var isProduction = false;

gulp.task('jekyll', function(done) {
  if (!isProduction) {
    browserSync.notify("Building Jekyll site...");
  }
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
  .on('close', done);
});

gulp.task('styles', function() {
  if (!isProduction) {
    browserSync.notify("Building styles...");
  }
  return gulp.src('_assets/css/veil.css')
    .pipe(postcss([atimport(), nested(), tailwindcss('tailwind.js')]))
    .pipe(
      purgecss({
        content: ["_site/**/*.html", "_site/**/*.md", "_site/**/*.js"],
        whitelistPatterns: [/up-/, /flickity-/, /is-/],
        extractors: [
          { extractor: TailwindExtractor, extensions: ["html", "md", "js"] }
        ]
      })
    )
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssnano())
    .pipe(hashsum({filename: './_data/cache_bust_css.yml', hash: 'md5'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('_site/dist/css'))
    .pipe(gulpif(!isProduction, browserSync.reload({stream:true})));
});

gulp.task('scripts', function() {
  browserSync.notify("Building scripts...");
  return gulp.src(['_assets/js/veil.js'])
    .pipe(uglify())
    .pipe(hashsum({filename: './_data/cache_bust_js.yml', hash: 'md5'}))
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.dest('_site/dist/js'))
    .pipe(gulpif(!isProduction, browserSync.reload({stream:true})));
});

gulp.task('images', function() {
  return gulp.src(['_assets/img/**/*'])
    .pipe(gulp.dest('dist/img'))
    .pipe(gulp.dest('_site/dist/img'));
});

gulp.task('fonts', function() {
  return gulp.src(['_assets/fonts/**/*'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe(gulp.dest('_site/dist/fonts'));
});

gulp.task('icons', function() {
  return gulp.src('_assets/icons/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest('_includes'));
});

gulp.task('assets', gulp.parallel('scripts', 'styles', 'images', 'fonts', 'icons'));

gulp.task('jekyll-rebuild', gulp.series('jekyll', 'styles', function(done) {
  browserSync.reload();
  done();
}));

gulp.task('production', function(done) {
  isProduction = true;
  process.env.NODE_ENV = 'production';
  process.env.JEKYLL_ENV = 'production';
  done();
})
gulp.task('build', gulp.series('jekyll', 'assets'));

gulp.task('browser-sync', gulp.series('build', function(done) {
  browserSync.init({
    server: "_site",
    port: 4000
  });
  done();
}));
gulp.task('watch', function() {
  gulp.watch(['_assets/css/**/*.css'], gulp.series('styles'));
  gulp.watch(['_assets/js/**/*.js'], gulp.series('scripts'));
  gulp.watch(['_assets/icons/*.svg'], gulp.series('icons'));
  gulp.watch(['_assets/img/*'], gulp.series('images'));
  gulp.watch(['**/*.html', '**/*.yml', '**/*.md', '!_site'], gulp.series('jekyll-rebuild'));
});
gulp.task('default', gulp.series('browser-sync', 'watch'));
