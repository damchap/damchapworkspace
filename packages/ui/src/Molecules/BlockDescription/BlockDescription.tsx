import Styles from './BlockDescription.module.scss'
import clsx from 'clsx'
import {TitreH3} from "../../Atoms/TitreH3/TitreH3";

type Props = {
    className?: string
    Title?: string
    Link?: string
    TitleLink?: string
    Date?: string
    Description?: Array<string>
}

export function BlockDescription({className, Description, Title, Date, TitleLink, Link}: Props) {
    return <div className={clsx(className, Styles.BlockDescription)}>
        <TitreH3 className={Styles.BlockDescription__title}>
            {Title} <a href={Link}>@{TitleLink}</a>
        </TitreH3>
        <span className={Styles.BlockDescription__date}>{Date}</span>
        <ul className={Styles.BlockDescription__Ul}>
            {Description?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
}