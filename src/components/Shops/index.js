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
        { name: 'all', lable: 'all' },
        { name: 'brazil', lable: 'Brazil' },
        { name: 'kenya', lable: 'Kenya' },
        { name: 'сolumbia', lable: 'Columbia' },
        { name: 'shopping', lable: `${shopingBucket}` }
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

    const buttonsFilter = buttons.slice(0, 4)
    const buttonsShopping = buttons.slice(4)
  



    return (

        <section className="shops" style={{ display: '' }}>
            <div className="shops__divider"></div>

            <div className="wrapper__search">
                <div className="shops__search">
                    <Search onUpdateSeach={onUpdateSeach} />
                </div>

                <div className="shops__button">
                    <span>Or filter</span>
                    {buttonsFilter}
                </div>

                <div className="shops__shopping">
                    <span>🛒</span>
                    
                    <b>{buttonsShopping}</b>
                </div>
            </div>


            <div className="shops__products" >
                {elements}
            </div>

        </section>
    )
}

export default Shops;