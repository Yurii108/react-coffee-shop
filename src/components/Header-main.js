function HeaderMain() {
    return (
        <>
            <div className="main">
                <h1 className="main_header">Everything You Love About Coffee</h1>
                <div className="main_logo">
                    <div className="main_logo_divider"></div>
                    <div className="main_logo_img"><img src='/img/bg/coffee-beans-white-sec.svg' alt='logo' /></div>
                    <div className="main_logo_divider"></div>
                </div>
                <h2 className="main_subheader">We makes every day full of energy and taste</h2>
                <h2 className="main_subheader">Want to try our beans?</h2>
                <button className='main_button'>More</button>
            </div>

            <nav className='nav header__nav'>
                <ul>
                    <li>
                        <div className="logo_img">
                            <img src='./img/bg/coffee-beans-white.svg' alt='logo' />
                        </div>
                        <a href="https://www.facebook.com/">Coffee house
                        </a></li>
                    <li><a href="https://www.facebook.com/">Our coffee
                    </a></li>
                    <li><a href="https://www.facebook.com/">For your pleasure
                    </a></li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderMain;