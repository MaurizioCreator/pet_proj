import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

// Функция возвращающая Лоудеры для различных модулей
export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {


    // Если не используем TS - нужно установить babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Создают стили из строк JS
            //'style-loader',
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Транслирует CSS в CommonJS
            {
                loader:'css-loader',
                options:{
                    modules:{
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Компилирует SASS в CSS
            'sass-loader',
        ],
    }

    return [
        // Правила работы с модулями расширения ts
        typescriptLoader,
        // Правила работы с модулями расширения css/scss
        cssLoader,
    ]
}