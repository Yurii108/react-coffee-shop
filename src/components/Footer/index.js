function Footer({onClickF, onClickS, onHeaderPleasure}) {
    return (
        <footer className='footer'>
            <div className="footer-nav-wrraper">
                <nav className='nav footer__nav'>
                    <ul>
                        <li>
                            <div className="logo_img">
                                <img src='/img/bg/coffee-beans-black.svg' alt='logo' />
                            </div>
                            <span className="button_nav" onClick={onClickF}>
                                Coffee house</span>
                        </li>
                        <li><span className="button_nav" onClick={onClickS} >
                            Our coffee</span></li>
                        <li><span  className="button_nav"onClick={onHeaderPleasure}>
                            For your pleasure</span></li>
                    </ul>
                </nav>
            </div>

            <div className="logo footer__logo">
                <div className="logo_divider"></div>
                <div className="logo_img"><img src='/img/bg/coffee-beans-black-sec.svg' alt='logo' /></div>
                <div className="logo_divider"></div>
            </div>
        </footer>
    )
}

export default Footer;