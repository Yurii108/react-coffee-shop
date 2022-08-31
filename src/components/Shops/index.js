import './shops.scss';

import Search from '../Search';
import Cards from "../Cards";


const Shops = ({ data, onToggleShopping, onUpdateSeach, shopingBucket, onUpdateFilter, filter }) => {

    const elements = data.map(item => {
        const { id, ...itemsProps } = item;

        return (
            <Cards
                key={id} {...itemsProps}
                onToggleShopping={() => onToggleShopping(id)} />
        )
    });

    const buttonsData = [
        { name: 'all', lable: 'all coffee' },
        { name: 'brazil', lable: 'Brazil' },
        { name: 'kenya', lable: 'Kenya' },
        { name: 'сolumbia', lable: 'Columbia' },
        { name: 'shopping', lable: 'Shopping' }
    ]

    const buttons = buttonsData.map(({name, lable}) => {
        const active = filter === name;
        const activeOn = active ? "shops__button_item_active" : "shops__button_item"
        return (
            <button 
            type='button'
            className={`shops__button_item ${activeOn}`}
            key={name}
            onClick={() => onUpdateFilter(name)}
            >{lable}</button>
            )
    })



    return (

        <section className="shops" style={{ display: '' }}>
            <div className="shops__divider"></div>

            <div className="wrapper__search">
                <div className="shops__search">
                    <Search onUpdateSeach={onUpdateSeach} />
                </div>

                <div className="shops__button">
                    <span>Or filter</span>
                    {buttons}
                    {/* <button className="button">All coffee</button>
                    <button className="button">Brazil</button>
                    <button className="button">Kenya</button>
                    <button className="button">Columbia</button> */}
                    
                </div>

                <div className="shops__shopping">
                    <span>🛒</span>
                    {/* <button>Shopping </button> */}
                    <b>{shopingBucket} $</b>
                </div>
            </div>


            <div className="shops__products" >
                {elements}
            </div>

        </section>
    )
}

export default Shops;