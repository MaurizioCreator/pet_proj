import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// Функция возвращаяющая плагины для конфига
export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {

    const {paths} = options;

    return [
        // HtmlWebpackPlugin - плагин для добавления html файла
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        // webpack.ProgressPlugin - плагин для отоброжения лоудера процесса сборки в консоли
        new webpack.ProgressPlugin(),
        // MiniCssExtractPlugin - плагин для создания отдельных файлов для стилей собранной версии проекта
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}