import './header-our-coffee.scss'

function HeaderOurCoffee({HeaderPleasure}) {

    const displayOne = !HeaderPleasure ? { display: '' } : { display: 'none' };
    const displayTwo = !HeaderPleasure ? { display: 'none' } : { display: '' };

    return (
        <>
            <header className='header'>
                <div className='header_our_coffee' style={displayOne}>
                    <h2 className='header_our_coffee__title'>Our Coffee</h2>
                </div>

                <div className='header_pleasure' style={displayTwo}>
                    <h2 className='header_pleasure__title'>For your pleasure</h2>
                </div>
            </header>
        </>
    )
}


export default HeaderOurCoffee;