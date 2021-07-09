// webpack.config.js

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true,
                                modifyVars: getThemeVariables({
                                    dark: true, // Enable dark mode
                                })
                            },
                        },
},
                ],
            },
        ],
    },
};
