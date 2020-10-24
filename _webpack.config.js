module.exports = {
    module: {
        rules: [
            {
                test: /src\/styles\/.+\.scss$/,
                loader: "file-loader",
                options: {
                    publicPath: 'build/theme/theme-[name].[ext]',
                },
            },
        ],
    },
};