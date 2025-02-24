const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps()
    .postCss('resources/assets/css/material-dashboard.css', 'public/css', [
        //
    ]);


mix.js('resources/assets/js/material-dashboard.js', 'public/js')
    .sass('resources/assets/scss/material-dashboard.scss', 'public/css')
    .sourceMaps();