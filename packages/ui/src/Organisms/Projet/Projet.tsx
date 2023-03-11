import Styles from './Projet.module.scss'
import clsx from 'clsx'

type Props = {
    className: string
    UrlImage: string
}

export function Projet({className, UrlImage}: Props) {
    return <div className={clsx(className, Styles.Projet)}>
            <img
                src={UrlImage}
                alt="Picture of the author"
                width={451}
                height={230}
                style={{objectFit: 'cover'}}
            />
        <div className={Styles.ProjetTitreContent}>
            <h3 >Projet 1</h3>
            <span>2019 - 2020</span>
        </div>
        <p className={Styles.ProjetDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc sit amet ultricies ultricies, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
    </div>
}