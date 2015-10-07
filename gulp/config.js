'use strict';

var path = require('path');

function distName() {
  var folder = path.dirname(__dirname);
  folder = path.basename(folder);
  return folder.replace('_source', '');
}

var folderName = distName();
var dest = './../'+ folderName;
var src = './src';


module.exports = {
  destFolder: dest,

  browserSync: {
    proxy: 'http://arillo.dev/clean-test',
    port: 9000,
    notify: false,
    open: false
  },

  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest + '/css',
    prefix: [
      'ie >= 9',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },

  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },

  markup: {
    src: src + '/templates/**',
    dest: dest + '/templates'
  },

  jslint: {
    srcJs: src + '/js/**/*.js',
    srcCoffee: src + '/js/**/*.coffee'
  },


  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest,
    cssDest: dest + '/css',
    jsDest: dest + '/js'
  },

  svgSprite: {
    type: 'background',
    src: src + '/icons',
    glob: '**/*.svg',
    dest: dest + '/images',
    removeFills: true,
    optionsInline: {
      mode: {
        symbol: {
          sprite: 'sprite.svg',
          dest: '.',
          render: {
            scss: {
              template: 'gulp/tpl/_sprite-inline.scss',
              dest: '../../'+folderName+'_source/src/sass/_sprite.scss'
            }
          }
        }
      }
    },
    optionsBackground: {
      mode: {
        css: {
          layout: 'horizontal',
          sprite: 'sprite.svg',
          dest: '.',
          render: {
            scss: {
              template: 'gulp/tpl/_sprite-background.scss',
              dest: '../../'+folderName+'_source/src/sass/_sprite.scss'
            }
          }
        }
      },
      variables: {
        cssPath: '../images/'
      }
    }
  },

  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [
      {
        entries: src + '/js/main.coffee',
        dest: dest + '/js',
        outputName: 'main.js',
        // Additional file extentions to make optional
        extensions: ['.coffee'],
        // list of modules to make require-able externally
        require: ['jquery']
        // old: require: ['jquery', 'backbone/node_modules/underscore']
        // See https://github.com/greypants/gulp-starter/issues/87 for note about
        // why this is 'backbone/node_modules/underscore' and not 'underscore'
      }
    // }, {
    //   entries: src + '/js/page.js',
    //   dest: dest + '/js',
    //   outputName: 'page.js',
    //   // list of externally available modules to exclude from the bundle
    //   external: ['jquery', 'underscore']
    ]
  }
};
