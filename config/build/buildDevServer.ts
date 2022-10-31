import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration } from "webpack-dev-server";
//Функция возвращающая конфигурацию Сервера
export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        // порт
        port: options.port,
        // Открытие страницы при запуске сервера
        open: true,
        // Позволяет проксировать запросы через index page
        historyApiFallback: true,
    }
}