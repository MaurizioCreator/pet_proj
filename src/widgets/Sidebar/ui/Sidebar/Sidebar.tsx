import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import React, {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface SidebarProps {
    className?: string;
}
export const Sidebar:FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = (): void => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
        <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};
