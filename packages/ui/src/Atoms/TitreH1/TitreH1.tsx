import Styles from './TitreH1.module.scss'
// @ts-ignore
import clsx from 'clsx'
import React from "react";



type Props = {
    className?: string
    children: React.ReactNode
}

export function TitreH1({className, children}: Props) {
    return <h1 className={clsx(className, Styles.TitreH1)}>
        {children}
    </h1>
}