


function HeaderMain({onClickNav}) {

    return (
        <>
        <header className='header' >
            <div className="main" style={{ display: 'nane' }}>
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
                        <span>Coffee house</span>
                    </li>
                    <li><span onClick={onClickNav} >Our coffee</span></li>
                    <li><span>For your pleasure</span></li>
                </ul>
            </nav>
            </header>
        </>
        
    )
}

export default HeaderMain;