import Styles from './TitreH2.module.scss'
import clsx from 'clsx'

type Props = {
    className: string
    children: React.ReactNode
}

export function TitreH2({className, children}: Props) {
    return <h2 className={clsx(className, Styles.TitreH2)}>
        { children }
    </h2>
}