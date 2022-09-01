
function NavMenu({onClickF, onClickS, onHeaderPleasure}) {
    return (
        <nav className='nav header__nav'>
            <ul>
                <li>
                    <div className="logo_img">
                        <img src='./img/bg/coffee-beans-white.svg' alt='logo' />
                    </div>
                    <span onClick={onClickF}>Coffee house</span>
                </li>
                <li><span onClick={onClickS} >Our coffee</span></li>
                <li><span onClick={onHeaderPleasure}>For your pleasure</span></li>
            </ul>
        </nav>
    )
}

export default NavMenu;