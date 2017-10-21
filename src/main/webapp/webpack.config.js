var path = require('path');
var webpack = require('webpack');
var CSS_PATH = path.resolve(__dirname, 'css');

var options = {
  style: true,
  libraryDirectory: 'lib',       // default: lib
  libraryName: 'antd'            // default: antd
};

module.exports = {
    entry: {
        index:path.join(__dirname, 'src/index.js'),
        vendors: ['react','react-redux','redux-thunk','react-dom','jquery','echarts','antd']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    //fix problem http://stackoverflow.com/questions/28519287/what-does-only-a-reactowner-can-have-refs-mean#
    resolve: {
        alias: {
          'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test:/\.js?$/,
                exclude:/node_modules/,

                use:{
                    loader:'babel-loader',
                    options:{presets:['react','es2015']}

                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {  test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },

           { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
           { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
           { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
           { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    // babel: {
    //     plugins: [['antd', options]]
    // },

    plugins: [
        // kills the compilation upon an error.
        // this keeps the outputed bundle **always** valid
        new webpack.NoErrorsPlugin(),
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize:true, compress:{warnings: false}, exclude:/^index.js$/i}),
        new webpack.optimize.CommonsChunkPlugin('vendors')
    ]
};
