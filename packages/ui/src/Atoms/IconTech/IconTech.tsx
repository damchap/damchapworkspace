import Styles from './IconTech.module.scss'
import clsx from 'clsx'
import { Icon } from '@iconify/react';
import React from "react";

type Props = {
    className: string
    icon: string
}

export function IconTech({className, icon}: Props) {
    return <div className={clsx(className, Styles.IconTech)}>
        {icon && <Icon icon={icon} className={Styles.Icon} />}
    </div>
}