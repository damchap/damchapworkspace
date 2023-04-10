import {Footer, NavBar} from "@damchap/ui";
import { Inter } from '@next/font/google'
import clsx from "clsx";
import styles from "@/styles/About.module.scss";
const inter = Inter({ subsets: ['latin'] })
const navItems = [
    {
        link: '/',
        name: 'Home',
        icon: 'mdi:home'
    },
    {
        link: '/about',
        name: 'About',
        icon: 'mdi:account'
    },
    {
        link: '/projects',
        name: 'Projects',
        icon: 'mdi:folder'
    }
]
type Props = {
    children: React.ReactNode
}

export const Layout = ({children}: Props) => {
    return (
        <>
            <header className={styles.header}>
                <NavBar className={inter.className} navItems={navItems} />
            </header>
            <main>{children}</main>
            <Footer className={clsx(inter.className)} />
        </>
    );
}

