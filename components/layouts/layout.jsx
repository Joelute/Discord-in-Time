import Head from 'next/head'
import styles from '../../styles/layout.module.css'

export default function Layout({ children }) {
    return(
        <div>
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
                <h1 className={styles['nav-logo']}>Discord</h1> In Time
            </nav>
            {children}
        </div>
    )
}
