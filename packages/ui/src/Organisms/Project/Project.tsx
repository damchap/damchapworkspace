import Styles from './Project.module.scss'
import clsx from 'clsx'
import {GroupLogoTech} from "../../Molecules/GroupLogoTech/GroupLogoTech";
import {Button} from "../../Atoms/Button/Button";

type Props = {
    className?: string
    UrlImage: string
    Title?: string
    Date?: string
    Technologies: Array<string>
    ButtonInfo?: string
    ButtonGithub?: string
}


export function Project({className, UrlImage, Technologies, Title, Date, ButtonGithub, ButtonInfo}: Props) {
    return <div className={clsx(className, Styles.Project)}>
            <img
                src={UrlImage}
                alt="Picture of the author"
                width={"100%"}
                height={"100%"}
                style={{objectFit: 'cover'}}
            />
        <div className={clsx(Styles.TitleBlock)} style={(!ButtonInfo && !ButtonGithub ? {marginBottom: "3.375rem"} : {marginBottom: "0rem"} )}>
            <div className={Styles.ProjectTitreContent}>
                <h3 >{Title}</h3>
                <span>{Date}</span>
            </div>
            <GroupLogoTech
                className={Styles.GroupLogoTech}
                Technologies={Technologies}
            />
        </div>
        <div className={clsx(Styles.ProjectButtons)} >
            {ButtonInfo && <Button color={"#2181FA"} lien={ButtonInfo} outline={true}> en savoir plus</Button>}
            {ButtonGithub && <Button borderColor={"#E5E5E5"} color={"var(--tertiary-color);"} lien={ButtonGithub} outline={true}
                     icon={"mdi:github"}> Github</Button>}
        </div>

    </div>
}