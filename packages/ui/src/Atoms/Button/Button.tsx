import Styles from './Button.module.scss'
import React from "react";
// @ts-ignore
import clsx from 'clsx';
import { Icon } from '@iconify/react';

type Props = {
    className?: string,
    outline?: boolean,
    color?: string,
    onClick?: () => void,
    icon?: string,
    children: React.ReactNode
}

export const Button = ({className, outline, color, onClick, icon, children}: Props) => {

    return (
        <button
            onClick={onClick}
            className={clsx(className, Styles.Button)} style={outline ? {color: color, backgroundColor: "transparent"} : {backgroundColor: color, borderColor: color}}>
            {icon && <Icon icon={icon} className={Styles.Icon} style={{color: color}}/>}
            {children}
        </button>
    )
}