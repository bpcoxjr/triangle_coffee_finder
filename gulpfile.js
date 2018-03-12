const gulp = require("gulp");
const sass = require("gulp-sass");
const cssNano = require("gulp-cssnano");
const postCSS = require("gulp-html-postcss");
const concat = require("gulp-concat");
const minifyHTML = require("gulp-htmlmin");
const useref = require("gulp-useref");
const jshint = require("gulp-jshint");
const uglify = require("gulp-uglifyes");
const babel = require("gulp-babel");
const imageMin = require("gulp-imagemin");
const cache = require("gulp-cache");
const gulpIf = require("gulp-if");
const browserSync = require("browser-sync").create();
const del = require("del");
const runSequence = require("run-sequence");
const autoprefixer = require("gulp-autoprefixer");

// basic test function to make sure gulp is functional
gulp.task("test", function() {
  console.log("gulp works");
});

// convert Sass to CSS, pipe to CSS folder, and reload browser
gulp.task("sass", function() {
  return gulp.src("app/scss/*.scss")
    .pipe(sass({
      style: "compressed"
    }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// concatenate all CSS files and remove any unused styles
gulp.task("styles", function() {
  return gulp.src("app/css/*.css")
    .pipe(concat("styles.css"))
    .pipe(postCSS({
      html: ["app/*.html"]
    }))
    .pipe(gulp.dest("dist/css"))
});

//minify HTML files
/*gulp.task("html", function() {
  return gulp.src("app/*.html")
  .pipe(minifyHTML({collapseWhitespace: true}))
  .pipe(gulp.dest("dist"))
});*/

gulp.task("html templates", function() {
  return gulp.src("app/templates/**/*.html")
  .pipe(minifyHTML({collapseWhitespace: true}))
  .pipe(gulp.dest("dist/templates"))
});

// optimize images
gulp.task("images", function() {
  return gulp.src("app/images/**/*.+(png|jpg|gif|svg)")
    .pipe(cache(imageMin({
      interlaced: true
    })))
    .pipe(gulp.dest("dist/images"))
});

// lints Sass and adds any necessary prefixes to CSS for compatibility across browsers
gulp.task('autoprefixer', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: true
  }))
  .pipe(gulp.dest('dist/css'))
});

// make sure any ES6 JS works across all browsers
gulp.task('babel', function() {
  return gulp.src('app/js/**/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('dist/js'));
});

// looks at html files and concatenates all css files into a single file, and does the same for JS files; also minifies
gulp.task('useref', function() {
  return gulp.src('app/*.html')
  .pipe(useref())
  .pipe(gulpIf('*.js', uglify())) // minifies any JS files
  .pipe(gulpIf('*.css', cssNano())) // minifies any CSS files
  .pipe(gulp.dest('dist'))
});

// check JS for errors
gulp.task('js-hint', function() {
  return gulp.src('app/js/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
  return gulp.src('app/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});

// serve project so we can check it out in the browser and see changes live
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app' // here we indicate wich folder serves as the root for the server
    }
  })
});

// watch task; while running it watches all Sass, html, and JS files for changes and reloads browswer on save
gulp.task('watch', ['browserSync'], function() {
  gulp.watch('./app/scss/**/*.scss', ['sass'])
  gulp.watch('app/*.html', browserSync.reload)
  gulp.watch('app/js/**/*.js', browserSync.reload)
});

// clean up the dist folder by deleting any unused files
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//copy bower components to build folder
gulp.task('copy-bower', function(){
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

// main build task for constructing the dist folder
gulp.task('build', ['browserSync'], function(callback) {
  runSequence('clean:dist',
    ['sass', 'styles', 'babel', 'useref', 'js-hint', 'uglify', 'html templates', 'images', 'copy-bower'],
    callback
  )
  gulp.watch('dist/index.html', browserSync.reload);
});

// default task that runs on 'gulp' command
gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch'],
  callback
  )
});
