"use strict";

var gulp = require("gulp"),
    connect = require("gulp-connect"), //local dev server
    open = require("gulp-open"),
    config = require("./config.js"),
    browserify = require("browserify"),
    reactify = require("reactify"),
    source = require("vinyl-source-stream"),
    concat = require("gulp-concat"),
    eslint = require("gulp-eslint");

gulp.task("connect", function() {
    connect.server({
        root: ["dist"],
        port: config.port,
        base: config.baseUrl,
        livereload: true
    });
});

gulp.task("open", ["connect"], function() {
    gulp.src("dist/index.html")
        .pipe(open({ uri: config.baseUrl + ":" + config.port + "/"}));
});

gulp.task("html", function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
})

gulp.task("eslint", function() {
    return gulp.src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task("js", ["eslint"], function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on("error", console.error.bind(console))
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
});

gulp.task("css", function() {
    gulp.src(config.paths.css)
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest(config.paths.dist + "/css"));
});

gulp.task("images", function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + "/images"));
});

gulp.task("watch", function() {
    gulp.watch([config.paths.html], ["html"]);
    gulp.watch([config.paths.js], ["js"]);
});

gulp.task("default", ["html", "js", "css", "images", "open", "watch"]);
