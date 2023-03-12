import Styles from './Button.module.scss'
import React from "react";
// @ts-ignore
import clsx from 'clsx';
import { Icon } from '@iconify/react';

type Props = {
    className?: string,
    outline?: boolean,
    color?: string,
    borderColor?: string,
    onClick?: () => void,
    icon?: string,
    children?: React.ReactNode
    lien?: string
}

export const Button = ({className, outline, color, onClick, icon, children, lien, borderColor}: Props) => {

    return <a href={lien}
            className={clsx(className, Styles.Button)} style={outline ? {
                color: color,
                backgroundColor: "transparent",
                borderColor: borderColor
            } : {
                backgroundColor: color,
                borderColor: color
            }}>
            {icon && <Icon icon={icon} className={Styles.Icon} style={{color: color}}/>}
            {children}
        </a>
    {}

}