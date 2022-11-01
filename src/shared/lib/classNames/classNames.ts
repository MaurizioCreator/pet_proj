type Mods = Record<string, boolean | string>

// Функция для установки классов стилей
export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [cls,
        ...additional,
        ...Object.entries(mods).filter(([key, value]) => Boolean(value)).map(([key, value]) => key)
    ].join(' ');
}