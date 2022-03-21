import React from 'react'
import { NavLink } from 'react-router-dom'
import headerLinks from '../data/headerLinks'
import { useShowMobile } from '../hooks/useShowMobile'


const HeaderLogo = () => {
    return (<h1 className="logo"><span className="dee">Dee<span className="mauer">Mauer</span></span></h1>)
}

const SocialMediaLogos = () => {
    return (<div className='icons'>
        <a href="https://open.spotify.com/artist/6twNRKAmaVhokEJxOk3JEE?si=T_pCBQ07QtKWycpPsN5LaA"><i className='icon bx bxl-spotify'></i></a>
        <a href="https://www.instagram.com/deemauerofficial/"><img className="icon instagram" src="./images/socialmedia/Instagram_Glyph_Gradient_RGB.png" f alt="instagram" /></a>
        <a href="https://www.facebook.com/deemauerofficial"><img className="icon facebook" src="./images/socialmedia/f_logo_RGB-Blue_58.png" alt="facebook" /></a>
    </div>)
}

const NavBar = ({ showNav, setShowNav }) => {
    return (<nav className={showNav ? "navmenu display-nav" : "navmenu"}>
        <ul>
            {headerLinks.map(l => (
                <NavLink
                    to={l.link}
                    onClick={() => {
                        setShowNav(false)
                    }}
                    className={({ isActive }) => (isActive ? 'headeranchor active' : 'headeranchor')}
                >{l.title}</NavLink>
            ))}
        </ul>
    </nav>)
}

const Header = () => {

    const { showMobile, setShowMobile } = useShowMobile();


    return (
        <header className="siteheader">
            <HeaderLogo />
            <NavBar showNav={showMobile} setShowNav={setShowMobile} />
            <SocialMediaLogos />
            <ul className="navicons">
                <li><span className='navicons__headeranchor' onClick={() => {
                    setShowMobile(!showMobile)
                }}><i className='bx bx-menu'></i></span></li>
            </ul>
        </header >
    )
}




export default Header