var gulp = require("gulp");
var uglify = require("gulp-uglify");

//gulp minha_task
gulp.task("minha_task", function () {
    return gulp.src(['./app4.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

gulp.task("observar", function () {
    gulp.watch(['./app4.js'], gulp.series('minha_task'));
})