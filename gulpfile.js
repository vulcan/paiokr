var path = require('path');
var fs = require('fs-extra');
var bower = require('gulp-bower');
var mainBowerFiles = require('main-bower-files');
var del = require('del');
var rename = require('gulp-rename');
var gulp = require('gulp');

var Q  = require('q');
var fsremove = Q.denodeify(fs.remove);
var fscopy = Q.denodeify(fs.copy);
var fsmkdirs = Q.denodeify(fs.mkdirs);

gulp.task('clean:vendor', function(cb){
	del(['static/vendor']);
	cb();
	}); 

gulp.task('bower:download', ['clean:vendor'], function(){
	bower()
	});

gulp.task('bower:install', ['bower:download'], function(){
	gulp.src(mainBowerFiles(), {base: 'bower_components'}).pipe(gulp.dest('static/vendor/'))
	});

