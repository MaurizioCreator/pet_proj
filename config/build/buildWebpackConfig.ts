import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

// функция возвращающая настроенный конфиг в зависимости от веденных параметров
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths, isDev} = options;

    return {
        // mode - режим сборки, есть два типа: dev и prod
        mode,
        // entry - исходный файл откуда будет идти сбрка всех модулей
        entry: paths.entry,
        // output - генерируемый собраный файл, его название и расположение
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        // plugins - плагины
        plugins: buildPlugins(options),
        // module - правила взаимдействия с модулями не имеющими тип расширения js
        module: {
            rules: buildLoaders(options),
        },
        // resolve - параметр включающий в себя типы расшерений, которые не требуется прописывать при импортировании различных файлов(модулей)
        resolve: buildResolvers(),
        // inline-source-map - настройка позволяющая определять какому файлу принадлежит ошибка в собранном js файле при изменении
        devtool: isDev ? 'inline-source-map' : undefined,
        // сервер с лайв релоудом
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}