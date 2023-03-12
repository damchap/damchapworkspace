import Styles from './Project.module.scss'
import clsx from 'clsx'
import {GroupLogoTech} from "../../Molecules/GroupLogoTech/GroupLogoTech";
import {Button} from "../../Atoms/Button/Button";

type Props = {
    className?: string
    UrlImage: string
    Technologies: Array<string>
    ButtonInfo?: string
    ButtonGithub?: string
}


export function Project({className, UrlImage, Technologies}: Props) {
    return <div className={clsx(className, Styles.Project)}>
            <img
                src={UrlImage}
                alt="Picture of the author"

                style={{objectFit: 'cover'}}
            />
        <div className={clsx(Styles.TitleBlock)}>
            <div className={Styles.ProjectTitreContent}>
                <h3 >Projet 1</h3>
                <span>2019 - 2020</span>
            </div>
            <GroupLogoTech
                className={Styles.GroupLogoTech}
                Technologies={Technologies}
            />
        </div>
        <div className={clsx(Styles.ProjectButtons)}>
            <Button color={"#2181FA"} outline={true}> en savoir plus</Button>
            <Button borderColor={"#E5E5E5"} color={"var(--tertiary-color);"}  outline={true} icon={"mdi:github"}> Github</Button>
        </div>

    </div>
}