function HeaderMain(props) {
console.log(props);


    return (
        <>
            <div className="main" style={{ display: 'none' }}>
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
                        <span onClick={props.onClickNav}>Coffee house</span>
                    </li>
                    <li><span onClick={props.onClickNav}>Our coffee</span></li>
                    <li><span>For your pleasure</span></li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderMain;