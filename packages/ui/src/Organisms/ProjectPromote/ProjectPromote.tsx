import Styles from './ProjectPromote.module.scss'
import clsx from 'clsx'
import logo_clevguard from "/public/logo_clevguard.png";
import {TitreH3} from "../../Atoms/TitreH3/TitreH3";
import {GroupLogoTech} from "../../Molecules/GroupLogoTech/GroupLogoTech";

class dateProject {
    constructor(public dateStart: string, public dateEnd: string) {
    }
}

type Props = {
    className?: string
    UrlImage?: string
    Title?: string
    Description?: string
    Date?: dateProject
    Technologies?: Array<string>
    Link?: string

}

export function ProjectPromote({className, Title, Description, Date, Link, Technologies, UrlImage}: Props) {
    return <div className={clsx(Styles.content, className)}>
        <div>
            <img
                src={UrlImage}
                alt="Picture of the author"
                width={414}
                height={230}
            />
        </div>
        <div>
            <div className={clsx(Styles.ContentTitreTechno)}>
                <div>
                    <TitreH3 className={clsx(Styles.TitreProjectContent)}>{Title}</TitreH3>
                    <span>{Date?.dateStart} - {Date?.dateEnd}</span>
                </div>
                <div>
                    {Technologies && <GroupLogoTech Technologies={Technologies}/>}
                </div>
            </div>
            <p className={clsx(Styles.info)}>{Description}</p>
            <a href={Link} className={clsx(Styles.Link)}>En savoir plus</a>
        </div>
    </div>
}