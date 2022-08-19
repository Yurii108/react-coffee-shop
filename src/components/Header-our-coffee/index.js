import styleHeader from './header-our-coffee.module.scss'

console.log(styleHeader);

function HeaderOurCoffee() {
    return (
        <>
            <div className={styleHeader.header_our_coffee}>
                <h2 className={styleHeader.header_our_coffee__title}>Our Coffee</h2>
            </div>
        </>
    )
}


export default HeaderOurCoffee;