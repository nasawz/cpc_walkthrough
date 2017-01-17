/* eslint-disable */
var fs = require('fs')
var gulp = require("gulp")
var sftp = require('gulp-sftp')
var ftp = require('vinyl-ftp')
var run = require('run-sequence')

var pkg = require('../package.json')



gulp.task( 'deploy-cdn', function () {
    console.log('==============');

    var conn = ftp.create( {
        host:     'v1.ftp.upyun.com',
        user:     'baleina/baleina-cdn',
        password: 'asdf@123',
        parallel: 10,
        log: function (t,f) {
          if (f) {
            console.log(t,f);
          }
        }
    } );

    var globs = [
        '0.0.1/**',
        'libs/**',
        'res/**',
        'favicon.ico',
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, { base: 'dist/', buffer: false } )
        .pipe( conn.newer( './' ) ) // only upload newer files
        .pipe( conn.dest( './' ) );

} );

// gulp.task('deploy-cdn', function() {
//     console.log('-----------');
//     var conn = ftp.create( {
//         host:     'v1.ftp.upyun.com',
//         user:     'baleina/baleina-cdn',
//         password: 'asdf@123',
//         parallel: 10,
//         log: function (t,f) {
//           if (f) {
//             console.log(t,f);
//           }
//         }
//     } );
//
//     var globs = [
//         '0.0.1/**',
//         'libs/**',
//         'res/**',
//         'favicon.ico',
//     ];
//
//     return gulp.src( globs, {
//       base: 'dist/',
//       buffer: false
//   }).pipe( conn.newer( '/dist' ) )
//     .pipe( conn.dest( '/dist' ) );
// });


run('deploy-cdn')
