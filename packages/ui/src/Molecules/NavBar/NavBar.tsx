import Styles from './NavBar.module.scss'
import clsx from 'clsx'
import {NavItem} from "../../Atoms/NavItem/NavItem";
import {Button} from "../../Atoms/Button/Button";
import {Icon} from "@iconify/react";
import React, {useEffect} from "react";

class navItem {
    constructor(public link: string, public name: string, public icon: string) {
    }
}

type Props = {
    className: string
    logo?: string
    route?: string
    navItems: Array<navItem>
}



export function NavBar({className, navItems, route}: Props) {


    const [theme, setTheme] = React.useState("light")
    const HandleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        console.log(document.documentElement.getAttribute('data-theme'))
    }, [theme])
// auto dark mode
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        darkModeMediaQuery.addListener((e) => {
            const newTheme = e.matches ? 'dark' : 'light'
            setTheme(newTheme)
        })
    }, [theme])

    const [menuDropDown, setMenuDropDown] = React.useState(false)
    const menuDropDownFunc = () => {
        setMenuDropDown(!menuDropDown)
    }
    return <nav className={clsx(className, Styles.NavBar)}>
        <div>
            <a aria-label="Portfolio" href="/" className={clsx(Styles.titleNav)}>
                <div>
                    @damchap/{route}
                </div>
            </a>
        </div>
        <div className={Styles.NavBar__items}>
            {navItems.map((navItem, index) => {
                return <NavItem key={index} link={navItem.link}>{navItem.name}</NavItem>
            })}
            <Button className={clsx(Styles.NavBar__button)} color={theme === 'dark' ? "#FFF" : "#0F172A"} outline={true} icon={"mdi:github"} children={""}/>
            <Button className={clsx(Styles.NavBar__button)} color={theme === 'dark' ? "#FFF" : "#0F172A"} outline={true} icon={theme === 'dark' ? "ion:moon-sharp" : "ion:md-sunny"} children={""} onClick={HandleTheme}/>
            <div>
                <Button className={clsx(Styles.NavBar__button)} color={theme === 'dark' ? "#FFF" : "#0F172A"} outline={true} icon={"ic:round-menu"} onClick={menuDropDownFunc} children={""}/>
                <div className={ menuDropDown ? clsx(Styles.Navbar__burger__menu__drop__down, Styles.active) : clsx(Styles.Navbar__burger__menu__drop__down) }>
                    <div className={clsx(Styles.NavBar__burger__menu__drop__down__content)}>
                        {navItems.map((navItem) => {
                            return (
                                <NavItem link={navItem.link}>
                                    <Icon icon={navItem.icon}></Icon>
                                    {navItem.name}
                                </NavItem>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </nav>
}