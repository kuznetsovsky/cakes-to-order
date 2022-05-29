'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var posthtml = require("gulp-posthtml");
var postcss = require("gulp-postcss");
var include = require("posthtml-include");
var plumber = require('gulp-plumber');
var autoprefixer = require("autoprefixer");
var del = require("del");
var run =require("run-sequence");
var imagemin =require("gulp-imagemin");

gulp.task("html", function () {
    return gulp.src("*.html")
      .pipe(posthtml([
        include()
      ]))
      .pipe(gulp.dest("build"))
      .pipe(server.stream());
});

gulp.task("style", function() {
    gulp.src("sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("build/css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("copy", function () {
    return gulp.src([
      "fonts/**/*.{woff,woff2}",
      "img/**",
      "js/**"
    ], {
      base: "."
    })
    .pipe(gulp.dest("build"));
});

gulp.task("serv", function() {
    server.init({
      server: "build/"
    });
    gulp.watch("sass/**/*.scss", ["style"]);
    gulp.watch("*.html", ["html"]);
});

gulp.task("clean", function () {
    return del("build");
});

gulp.task("images", function () {
    return gulp.src("img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.jpegtran({progressive: true}),
        imagemin.svgo()
        ]))
    .pipe(gulp.dest("img"));
});

gulp.task("build", function (done) {
    run(
        "clean",
        "copy",
        "style",
        "html",
        done
    );
});
