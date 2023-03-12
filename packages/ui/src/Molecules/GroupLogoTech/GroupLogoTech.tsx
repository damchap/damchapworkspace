import Styles from './GroupLogoTech.module.scss'
import clsx from 'clsx'
import {IconTech} from "../../Atoms/IconTech/IconTech";

type Props = {
    className?: string
    Technologies?: Array<string>
}

export function GroupLogoTech({className, Technologies}: Props) {
    return <div className={clsx(className, Styles.GroupLogoTech)}>
        <div className={clsx(Styles.ContentLogo)}>
        {Technologies && Technologies.map((techno, index) => {
            return <IconTech className={clsx(Styles.IconTech)} icon={techno}/>
        })}
        </div>
    </div>
}