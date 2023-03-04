import Styles from './NavItem.module.scss'
import clsx from 'clsx'
import React from "react";

type Props = {
    className?: string
    children?: React.ReactNode
    link?: string
    style?: React.CSSProperties
    key?: number

}

export function NavItem({className, link, style, key, children}: Props) {
    return <a key={key} className={clsx(className, Styles.NavItem)} style={style} href={link}>
        {children}
    </a>
}