import Styles from './BlockDescription.module.scss'
import clsx from 'clsx'
import {TitreH3} from "../../Atoms/TitreH3/TitreH3";

type Props = {
    className?: string
    Titre?: string
    Link?: string
    Date?: string
    Description?: Array<string>
}

export function BlockDescription({className, Description, Titre, Date}: Props) {
    return <div className={clsx(className, Styles.BlockDescription)}>
        <TitreH3 className={Styles.BlockDescription__title}>
            {Titre} @<a href={"https://performance-webmarketing.fr"}>performance-webmarketing</a>
        </TitreH3>
        <span className={Styles.BlockDescription__date}>septembre 2022 - Aujourd’hui</span>
        <ul className={Styles.BlockDescription__Ul}>
            {Description?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
}