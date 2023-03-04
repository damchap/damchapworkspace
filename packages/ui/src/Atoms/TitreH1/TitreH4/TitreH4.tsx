import Styles from './TitreH4.module.scss'
import clsx from 'clsx'

type Props = {
    className: string
    children: React.ReactNode
}

export function TitreH4({className, children}: Props) {
    return <h4 className={clsx(className, Styles.TitreH4)}>
        { children }
    </h4>
}