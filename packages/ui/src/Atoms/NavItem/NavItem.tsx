import Styles from './NavItem.module.scss'
import clsx from 'clsx'
import React from "react";

type Props = {
    className?: string
    children?: React.ReactNode
    link: string
    style?: React.CSSProperties

}

export function NavItem({className, link, style, children}: Props) {
    return <a className={clsx(className, Styles.NavItem)} style={style} href={link}>
        {children}
    </a>
}