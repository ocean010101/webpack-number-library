const path = require('path');

module.exports = {
    mode: 'production',//启用 uglifyjs 压缩插件进行压缩输出
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'webpack-numbers.js',
        library: 'webpackNumbers',//暴露 library为webpackNumbers的全局变量
        libraryTarget: 'umd'//让 library 和其他环境兼容：umd:在 AMD 或 CommonJS 的 require 之后可访问
        // globalObject: 'this',//?????
    },
    externals: {//外部化 lodash:放弃对外部 library 的控制，而是将控制权让给使用 library 的用户
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    module: {
        rules: [
            {//以js结尾的全部文件，都将提供给babel-loader 
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    }
};

/* export default () => ({
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'webpack-numbers.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        // libraryExport: 'default',
        library: 'webpackNumbers'
    },
    externals: {
        'lodash': {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    },
}
);
 */