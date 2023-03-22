import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import {Button, TitreH1, TitreH3, TitreH2, TitreH4, ArticleItem, NavBar, ProjectPromote, Footer, Project} from "@damchap/ui";
import clsx from "clsx";


// images
import chapart_damien from '/public/chapart_damien.png';

const inter = Inter({ subsets: ['latin'] })
class techno {
    constructor(public name: string, public icon: string) {
    }
}
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
const onclick = () => {
    console.log("test")
}
export default function Home() {
    return (
    <>
      <Head>
        <title>portfolio de Chapart Damien</title>
        <meta name="description" content="e suis un développeur web full stack, spécialisé dans le développement d'applications web et mobiles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <NavBar className={inter.className} navItems={navItems} />
      </header>
      <main className={styles.main}>
          <span className={clsx(inter.className, styles.HelloWorld)}>Hello! 👋 Moi c’est</span>
          <TitreH1 className={clsx(styles.titreH1, inter.className)}>
              <span className={styles.titreH1span} >Damien</span> Chapart
          </TitreH1>
          <h2 className={clsx(inter.className, styles.BaseLine)}>Développeur Full stack.</h2>
            <p className={clsx(inter.className, styles.Description)}>Je suis un développeur web full stack, spécialisé dans le développement d'applications web et mobiles.</p>
          <div className={clsx(styles.HeaderButton)}>
              <Button onClick={onclick} className={clsx(inter.className)} color={"#2181FA"}> ME CONTACTER</Button>
              <Button onClick={onclick} className={clsx(inter.className)} color={"#2181FA"} outline={true} icon={"mdi:github"}> Github</Button>
          </div>
          <section className={styles.section}>
              <TitreH2 className={clsx(inter.className)}>🤖 Qui suis-je</TitreH2>
              <div className={styles.content}>
                  <div>
                      <Image src={chapart_damien}
                             alt="Picture of the author"
                             width={241}
                             height={276}
                             priority={true}
                      />
                  </div>
                  <div>
                      <TitreH3 className={clsx(inter.className, styles.TitreContent)}>Damien Chapart</TitreH3>
                      <TitreH4 className={clsx(inter.className)}>Etudiant en licence pro et développeur full stack</TitreH4>
                      <p className={clsx(inter.className, styles.info)}>
                          Bonjour et bienvenue, je suis un développeur junior, passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises.
                          <br/>
                          <br/>
                          Je réalise depuis plusieurs années, différents projets personnels ou professionnels dans le domaine de l’informatique, plus particulièrement dans le développement web ainsi que l’hébergement.
                      </p>
                      <Button lien={"/about"} className={clsx(inter.className)} color={"#2181FA"} outline={true} > En savoir Plus</Button>
                  </div>
              </div>
          </section>
          <section className={styles.section}>
              <TitreH2 className={clsx(inter.className)}>📘 Projet en avant</TitreH2>
              <ProjectPromote className={clsx(inter.className, styles.project)}
                              UrlImage="/logo_clevguard.png"
                              Title="Assistant Clevguard"
                              Technologies={["logos:c-plusplus", "logos:arduino", "logos:raspberry-pi","logos:php", "vscode-icons:file-type-composer"]}
                              Date={{dateStart:"2019",dateEnd: "2020"}}
                              Description="Clevguard est un projet de fin d’année de terminale STI2D (Sciences et Technologies de l’Industrie et du Développement Durable) option SIN (Système d’information et numérique). Le projet Clevguard est divisé en plusieurs composantes, des boîtiers de capteurs divers ainsi qu’une progressive Web App permettant une visualisation des données des capteurs."
              />
          </section>
          <section className={styles.section}>
              <TitreH2 className={clsx(inter.className)}>🖋 Article récents</TitreH2>
              <div className={styles.contentArticle}>
                <ArticleItem className={clsx(inter.className, styles.article)}
                              Image={{src:"/iconArticle/Congratulations.svg", alt:"test"}}
                              Title={"Allez ç’est (re)parti pour de nouvelle aventure ! 💥"}
                              Date={new Date(2023, 1, 1)}
                              Description={"pnpm, next.js, react, versel ou bien vue, nuxt3, netlify. Quelle de ce technologie j’utilise aujourd’hui pour développer des projects cumulent une partie front et back avec une api Rest ou"}
                              Technologies={new Array<techno>(new techno("React", "mdi:react"), new techno("pnpm", "file-icons:pnpm"))}/>
                  <ArticleItem className={clsx(inter.className, styles.article)}
                                Image={{src:"/iconArticle/Block-Chain.svg", alt:"test"}}
                                Title={"Ma stack de développement pour 2023 🚀"}
                                Date={new Date(2023, 2, 1)}
                                Description={"pnpm, next.js, react, versel ou bien vue, nuxt3, netlify. Quelle de ce technologie j’utilise aujourd’hui pour développer des projects cumulent une partie front et back avec une api Rest ou"}
                                Technologies={new Array<techno>(new techno("React", "mdi:react"), new techno("Next.js", "teenyicons:nextjs-solid"))}/>

              </div>
          </section>
          <section className={styles.section}>
              <TitreH2 className={clsx(inter.className)}>🖋 Les autres project</TitreH2>
              <div className={clsx(styles.row)}>
                  <Project className={clsx(inter.className)} Title={"perf'N Zen"} Date={"2022 - 2023"} UrlImage={"/projet_PerfN-Zen.png"} Technologies={["logos:turborepo-icon", "logos:express", "logos:pnpm","logos:react", "logos:react-query-icon"]} ButtonGithub={"https://github.com/perf-n-zen"} />
                  <Project  className={clsx(inter.className)} UrlImage={"/logo_clevguard.png"} Technologies={["logos:c-plusplus", "logos:arduino", "logos:raspberry-pi","logos:php", "vscode-icons:file-type-composer"]} />
              </div>
              <div className={clsx(styles.row)}>
                  <Project className={clsx(inter.className)} UrlImage={"/logo_clevguard.png"} Technologies={["logos:c-plusplus", "logos:arduino", "logos:raspberry-pi","logos:php", "vscode-icons:file-type-composer"]} />
                  <Project  className={clsx(inter.className)} UrlImage={"/logo_clevguard.png"} Technologies={["logos:c-plusplus", "logos:arduino", "logos:raspberry-pi","logos:php", "vscode-icons:file-type-composer"]} />

              </div>
              <div className={clsx(styles.row, styles.ProjectFin)}>
                  <Button onClick={onclick} className={clsx(inter.className)} color={"#2181FA"} outline={true} > Voir plus</Button>

              </div>
          </section>
      </main>
        <Footer className={clsx(inter.className)} />
    </>
  )
}
