import Styles from './Footer.module.scss'
import clsx from 'clsx'

type Props = {
    className: string
}

export function Footer({className}: Props) {
    return <> <footer className={clsx(className, Styles.Footer)}>
        <div className={clsx(Styles.footerNav)}>
            <div className={clsx(Styles.FooterContent, Styles.FooterCenter)}>
            <h3>Navigation</h3>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Projets</a></li>
            </ul>
        </div>
            <div className={clsx(Styles.FooterContent, Styles.FooterRight)}>
                <h3>Info pratique</h3>
                <ul>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Mentions légales</a></li>
                    <li><a href="#">Accessibilité</a></li>
                    <li><a href="#">Plan du site</a></li>
                </ul>
            </div>
        </div>
    </footer></>
}