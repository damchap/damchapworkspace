import Styles from './TitreH3.module.scss'
import clsx from 'clsx'

type Props = {
    className: string
    children: React.ReactNode
}

export function TitreH3({className, children}: Props) {
    return <h3 className={clsx(className, Styles.TitreH3)}>
        { children }
    </h3>
}