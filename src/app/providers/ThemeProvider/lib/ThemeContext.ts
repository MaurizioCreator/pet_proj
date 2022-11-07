import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    NEW_LIGHT = 'new-light',
    DARK = 'dark',
    NEW_DARK = 'new-dark'
}
export interface ThemeContextProps {
 theme?: Theme;
 setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';