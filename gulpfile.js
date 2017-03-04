const gulp = require("gulp");
const mocha = require("gulp-mocha");
const bg = require("gulp-bg");
const browserSync = require("browser-sync").create();
const del = require("del");
const imagemin = require("imagemin");

let bgstart;

gulp.task("start", bgstart = bg("node", "./server.js"));

gulp.task("test", ["start"], function(){
  return gulp.src("./tests/test.js", {read: false})
    .pipe(mocha({reporter: "nyan"}))
    .once("end", function(){
      bgstart.setCallback(function(){
        process.exit(0);
      });
      bgstart.stop(0);
    })
    .once("error", function(){
      bgstart.setCallback(function(){
        process.exit(0);
      });
      bgstart.stop(0);
    });
});


gulp.task("browserSync", function(){
  browserSync.init({
    proxy: "localhost:7678"
  });
});


gulp.task("watch", ["browserSync"], function(){
  gulp.watch("./public/views/**/*.hbs").on("change", browserSync.reload);
});
