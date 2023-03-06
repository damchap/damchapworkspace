import Styles from './ArcticleItem.module.scss'
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

export function ArcticleItem({className, Image, Title, Description, Date, Views, Technologies}: Props) {
    return <article className={clsx(className, Styles.ArcticleItem)} >
        <div className={clsx(Styles.ContentImage)}>
            <img src={Image?.src}
                 alt={Image?.alt}
                 width={104}
                 height={104} />
        </div>
        <div className={Styles.DescriptionArticle}>
            <div className={clsx(Styles.infoArticle)}>
                <time dateTime={Date?.toTimeString()}>{Date?.toTimeString()}</time>
                <span>10 vues</span>
            </div>
            <h3>{Title}</h3>
            <div className={clsx(Styles.ContentButton)}>

                {Technologies && Technologies.map((techno, index) => {
                    return <Button className={clsx(Styles.ButtonArticle)} color={"#64748B"} outline={true} icon={techno.icon} children={techno.name}/>
                })}
            </div>
            <p>
                pnpm, next.js, react, versel ou bien vue, nuxt3, netlify. Quelle de ce technologie j’utilise aujourd’hui pour développer des projects cumulent une partie front et back avec une api Rest ou
            </p>
        </div>
    </article>
}