const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const nodeSass = require('node-sass');
const sass = gulpSass(nodeSass);
const imagemin = require('gulp-imagemin'); 
const plumber = require('gulp-plumber'); 
const shorthand = require('gulp-shorthand');
const gcmq = require('gulp-group-css-media-queries'); 
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


const path = {
    build: {
        css: 'build/css/',
        assets: 'build/assets'
    },

    src: {
        // add your own paths to modules
        scss: {
            main: 'src/scss/main.scss',
        },
        assets: 'src/assets/*.*'
    },

    watch: {
        scss: 'src/scss/**/*.scss'
    }
}

const minImg = (cb) => {
    return gulp.src(path.src.assets)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.assets))
}

const compileStyle = (cb) => {
    return gulp.src(path.src.scss.main)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.build.css))
}

const watchMain = (cb) => {
    return gulp.watch(path.watch.scss, compileStyle);
}


exports.watchMain = watchMain;
exports.img = minImg;