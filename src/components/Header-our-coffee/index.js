import styleHeader from './header-our-coffee.module.scss'

function HeaderOurCoffee() {
    return (
        <>
            <header className='header'>
                <div className={styleHeader.header_our_coffee} style={{ display: '' }}>
                    <h2 className={styleHeader.header_our_coffee__title}>Our Coffee</h2>
                </div>
            </header>
        </>
    )
}


export default HeaderOurCoffee;