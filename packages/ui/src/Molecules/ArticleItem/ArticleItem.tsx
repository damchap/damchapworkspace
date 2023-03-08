import Styles from './ArticleItem.module.scss'
import clsx from 'clsx'
import {Button} from "../../Atoms/Button/Button";

class img {
    constructor(public src: string, public alt: string) {
    }
}
class techno {
    constructor(public name: string, public icon: string) {
    }
}

type Props = {
    className?: string
    Image?: img
    Title?: string
    Description?: string
    Date?: Date
    Views?: number
    Technologies?: Array<techno>
}

export function ArticleItem({className, Image, Title, Description, Date, Views, Technologies}: Props) {
    return <article className={clsx(className, Styles.ArcticleItem)} >
        <div className={clsx(Styles.ContentImage)}>
            <img src={Image?.src}
                 alt={Image?.alt}
                 width={104}
                 height={104} />
        </div>
        <div className={Styles.DescriptionArticle}>
            <div className={clsx(Styles.infoArticle)}>
                <time dateTime={Date?.toLocaleDateString("fr")}>{Date?.toLocaleDateString("fr")}</time>
                <span>10 vues</span>
            </div>
            <h3>{Title}</h3>
            <div className={clsx(Styles.ContentButton)}>

                {Technologies && Technologies.map((techno, index) => {
                    return <Button className={clsx(Styles.ButtonArticle)} color={"#64748B"} outline={true} icon={techno.icon} children={techno.name}/>
                })}
            </div>
            <p>
                {Description}
            </p>
        </div>
    </article>
}