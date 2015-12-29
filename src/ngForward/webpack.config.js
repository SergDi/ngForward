var webpack = require('webpack');

module.exports = {
    entry: {
        'app': [
          'reflect-metadata',
          './wwwroot/app/app.js',
          './wwwroot/app/outside.js',
          './wwwroot/app/app-forward.js'       
        ]
    },
    output: {
        filename: 'wwwroot/bundle.js'
    }
}