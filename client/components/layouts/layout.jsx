import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/layout.module.css'

export default function Layout({ intro, handleIntro, children}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
    }

    return(
        <div className={styles.container}>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/favicon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Discord Timestamp Generator | Discord in Time</title>
                <meta 
                    name="description" 
                    content="Create your Discord timestamps here! Discord in Time generates beatiful dynamic date-time display in your Discord messages. Choose your time and copy the code below." 
                    key="desc"/>
                <meta name="keywords" content="discord time, discord time messages, discord timestamp, discord, timestamp, generator"/>
                <meta property='og:title' content='Discord Timestamp Generator'/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://discordintime.netlify.app/"/>
                <meta property="og:description" content="Create your Discord timestamps here! Discord in Time generates beatiful dynamic date-time display in your Discord messages. Choose your time and copy the code below."/>
                <meta name="twitter:title" content="Discord Timestamp Generator"/>
                <meta name="twitter:description" content="Create your Discord timestamps here! Discord in Time generates beatiful dynamic date-time display in your Discord messages. Choose your time and copy the code below."/>
                <meta name="twitter:card" content="summary"/>
                <meta name="google-site-verification" content="xG81VBeSOqYLAf49yQUaetkkO6naKgDgbxui6zO4Ono"/>
            </Head>
            <nav className={styles.nav}>
                <div className={styles['logo-container']}>
                    <h1 className={styles['nav-logo']}>Discord</h1> In Time
                </div>
                <svg className={styles.menu} width='60px' height='60px' fill='#EBEBEB'  onClick={handleMenu}>
                    <rect width={'30px'} height='3px' y='18px'></rect>
                    <rect width={'30px'} height='3px' y='27px'></rect>
                    <rect width={'30px'} height='3px' y='36px'></rect>
                </svg>
                {intro.isIntro ? 
                    <div className={styles.show} onClick={() => handleIntro()}><i className={`uil uil-times-circle ${styles.intro}`}></i></div>:
                    <div onClick={() => handleIntro()}><i className={`uil uil-question-circle ${styles.intro}`}></i></div>
                }
            </nav>
            <div className={styles['body-container']}>
                <aside className={styles.sidebar} aria-expanded={isMenuOpen}>
                    <Link href={'/'}># Timestamp Generator</Link>
                    <Link href={'/timestamps'}># My Timestamps</Link>
                </aside>
                {children}
            </div>
            
        </div>
    )
}
