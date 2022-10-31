import webpack from "webpack";

// Функция возвращающая дополнительные параметры для конфига
export function buildResolvers(): webpack.ResolveOptions {

    return {
        // Импорты файлов формата tsx,ts,js с возможностью не добавлять расширение файла
        extensions: ['.tsx', '.ts', '.js'],
    }
}