import webpack from "webpack";
import {BuildOptions} from "./types/config";

// Функция возвращающая дополнительные параметры для конфига
export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {

    return {
        // Импорты файлов формата tsx,ts,js с возможностью не добавлять расширение файла
        extensions: ['.tsx', '.ts', '.js'],
        // Установка приоритета абсолютных путей
        preferAbsolute: true,
        // Абсолютные пути
        modules: [options.paths.src, 'node_modules'],
        mainFiles:['index'],
        // Приставка для абсолютного импорта
        alias: {}
    }
}