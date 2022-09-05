

function HeaderMain() {

    return (
        <header className='header' >
            <div className="main" style={{ display: 'nane' }}>
                <h1 className="main_header">Everything You Love About Coffee</h1>
                <div className="main_logo">
                    <div className="main_logo_divider"></div>
                    <div className="main_logo_img"><img src='img/bg/coffee-beans-white-sec.svg' alt='logo' /></div>
                    <div className="main_logo_divider"></div>
                </div>
                <h2 className="main_subheader">We makes every day full of energy and taste</h2>
                <h2 className="main_subheader">Want to try our beans?</h2>
                <a className='main_button' href="#more">More</a>
            </div>
        </header>
    )
}

export default HeaderMain;