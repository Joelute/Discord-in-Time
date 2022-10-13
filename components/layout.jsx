import Head from 'next/head'
import styled from 'styled-components'

export default function Layout({ children }) {
    return(
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/favicon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Discord Timestamp Generator</title>
                <meta name="description" content="Create your Discord timestamps here! Discord in Time generates beatiful dynamic date-time display in your Discord messages. Choose your time and copy the code below."/>
                <meta name="keywords" content="discord time, discord time messages, discord timestamp, discord, timestamp, generator"/>
                <meta property='og:title' content='Discord Timestamp Generator'/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://discordintime.netlify.app/"/>
                <meta property="og:description" content="Create your Discord timestamps here! Discord in Time generates beatiful dynamic date-time display in your Discord messages. Choose your time and copy the code below."/>
                <meta name="twitter:title" content="Discord Timestamp Generator"/>
                <meta name="twitter:description" content="Create your Discord timestamps here! Discord in Time generates beatiful dynamic date-time display in your Discord messages. Choose your time and copy the code below."/>
                <meta name="twitter:card" content="summary"/>
            </Head>
            <Navbar>
                <NavbarLogo>Discord</NavbarLogo> In Time
            </Navbar>
            {children}
        </div>
    )
}

const Navbar = styled.nav`
  height: 2.2em;
  width: 100%;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
  display:flex;
  align-items: center;
  justify-content:center;
  color: #EBEBEB;
  font-size: 2rem;
  letter-spacing: 1px;
  transition: color 1s ease, background-color 1s ease;
  
  :hover,
  :focus {
    background-color:#9EAEE5;
    color: white;
  }
`

const NavbarLogo = styled.h1`
  color: inherit;
  font-size:inherit;
  padding: 0.3em;
  background-color: #7289DA;
  border-radius: 1rem;
  margin-right: 0.2em;
`