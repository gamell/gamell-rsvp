gamell.io RSVP
=========

A simple wedding RSVP page. [See it live](http://gamell.io/rsvp).

Mostly inspired in my http://gamell.io portfolio / CV page. Repo [here](https://github.com/gamell/gamell.io)

Usage
-----

I used `yeoman`, `grunt` and `bower` to create and develop this project. You should have <a href="http://nodejs.org/">NodeJS</a>, <a href="https://npmjs.org/">npm</a> and <a href="http://yeoman.io/">yeoman</a> to run this project locally.

Once you have all the above installed, you just have to run:

    npm install

followed by

	bower update

then just run the app:

    grunt server


The previous command will boot up the development server on your localhost using the "app" configuration (nothing is concatenated or minified, this is the configuration you want to use to develop and test locally).

Once you are done coding and you are happy with the outcome you can run

    grunt build

Which by default will build the minified, uglyfied, optimized version of the site in the dist/ directory.

Furthermore, if you want to push directly to your FTP host of choice, you can do so by editing the `Grunt.js` file ( editing the ftpush section) and creating a `.ftpush` file in your root directory. You can find more information here: https://github.com/inossidabile/grunt-ftpush

Libraries used
--------------

- <a href="http://jschr.github.io/textillate/">textillate</a> (<a href="https://daneden.me/animate/">animate.css</a>, <a href="http://letteringjs.com/">letteringjs</a>): the homepage animation.
- <a href="http://bartaz.github.io/impress.js">impressjs</a>: for the 3d effects and transitions.
- <a href="http://d3js.org/">d3</a> (<a href="https://github.com/mbostock/topojson">topojson</a>, <a href="https://npmjs.org/package/queue-async">queue-async</a>): infographics and maps.
- <a href="http://getbootstrap.com/">Bootstrap</a>: base CSS.
- <a href="http://fontawesome.io/">font-awesome</a>: icons.
- <a href="https://github.com/jaz303/tipsy">tipsy</a>: tooltips.
- <a href="http://jquery.com/">jQuery</a>: to glue everything together.
- iOS colors from: http://ios7colors.com/
- Modified ie6 warning to warn for browsers lower than ie9: https://code.google.com/p/ie6-upgrade-warning/

