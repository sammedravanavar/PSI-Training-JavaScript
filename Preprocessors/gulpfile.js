var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('convertscss', function() {
   return gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//gulp.task('default', gulp.parallel('convertscss'));
gulp.task('default',function(){
    return gulp.watch('styles/*.scss', gulp.series('convertscss'));
})