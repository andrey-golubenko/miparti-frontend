let gulp            = require('gulp');
let sass            = require('gulp-sass')(require('sass'));
let browserSync     = require('browser-sync');
let uglify          = require('gulp-uglify');
let concat          = require('gulp-concat');
let del             = require('del');
let autoprefixer    = require('gulp-autoprefixer');
let replace         = require('gulp-replace');

gulp.task('clean', async function () {
    del.sync('dist')
});

gulp.task('scss', function (){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer([
            'last 5 versions',
            '> 1%',
            'ie 8',
            'ie 7'
        ],
            { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('app/scss'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('js', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        ghostMode: false,
        notify: false,
        middleware: [
            function(req, res, next) {
                res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
                res.setHeader('Pragma', 'no-cache');
                res.setHeader('Expires', '0');
                next();
            }
        ]
    });
});

gulp.task('export', function () {
    return Promise.all([
        gulp.src('app/**/*.html', { buffer: true })
            .pipe(gulp.dest('dist')),

        gulp.src('app/css/**/*.css', { buffer: true })
            .pipe(gulp.dest('dist/css')),

        gulp.src('app/js/**/*.js', { buffer: true })
            .pipe(gulp.dest('dist/js')),

        gulp.src('app/fonts/**/*.*', { buffer: true })
            .pipe(gulp.dest('dist/fonts')),

        gulp.src('app/img/**/*.*', { buffer: true })
            .pipe(gulp.dest('dist/img')),

        gulp.src('app/countries_images/**/*.*', { buffer: true })
            .pipe(gulp.dest('dist/countries_images'))
    ]);
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));