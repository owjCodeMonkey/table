module.exports = {
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: 'localhost',
        port: '8080',
        proxy: {
            '/api': {
                target: 'http://ifs.nnnu.edu.cn/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
};
