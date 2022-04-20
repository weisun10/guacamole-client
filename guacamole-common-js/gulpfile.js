const gulp = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');

gulp.task("default", function () {
  return gulp
    .src("./src/main/webapp/modules/*.js")
    .pipe(concat("guacamole-common.js"))
    .pipe(gulp.dest("dist"))
});

gulp.task("minify", function () {
  return gulp
    .src("./dist/guacamole-common.js")
	.pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(rename("guacamole-common.min.js"))
	.pipe(sourcemaps.write("../dist"))	
    .pipe(gulp.dest("dist"))
});
