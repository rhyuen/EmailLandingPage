var gulp = require("gulp");
var mocha = require("gulp-mocha");
var bg = require("gulp-bg");
var browserSync = require("browser-sync").create();

var bgstart;

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
  gulp.watch("*.hbs").on("change", browserSync.reload);
});
