import Styles from './ProjectPromote.module.scss'
import clsx from 'clsx'
import logo_clevguard from "/public/logo_clevguard.png";
import {TitreH3} from "../../Atoms/TitreH3/TitreH3";

type Props = {
    className?: string
}

export function ProjectPromote({className}: Props) {
    return <div className={Styles.content}>
        <div>
            <img
                src={logo_clevguard}
                alt="Picture of the author"
                width={414}
                height={230}
            />
        </div>
        <div>
            <TitreH3 className={clsx(Styles.TitreContent)}>Assistant Clevguard</TitreH3>
            <time className={clsx(Styles.time)}>2019 - 2020</time>
            <p className={clsx(Styles.info)}>
                Clevguard est un projet de fin d’année de terminale STI2D (Sciences et Technologies de l’Industrie et du Développement Durable) option SIN (Système d’information et numérique).
                Le projet Clevguard est divisé en plusieurs composantes, des boîtiers de capteurs divers ainsi qu’une progressive Web App permettant une visualisation des données des capteurs.
            </p>
            <a href="/" className={clsx(Styles.Link)}>En savoir plus</a>
        </div>
    </div>
}