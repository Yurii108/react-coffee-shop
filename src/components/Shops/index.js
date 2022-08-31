import style from './shops.module.scss';

import Search from '../Search';
import Cards from "../Cards";


const Shops = ({ data, onToggleShopping, onUpdateSeach, shopingBucket, onUpdateFilter }) => {

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
    
        return (
            <button 
            type='button'
            className="button"
            key={name}
            onClick={() => onUpdateFilter(name)}
            >{lable}</button>
            )
    })



    return (

        <section className={style.shops} style={{ display: '' }}>
            <div className={style.shops__divider}></div>

            <div className={style.wrapper__search}>
                <div className={style.shops__search}>
                    <Search onUpdateSeach={onUpdateSeach} />
                </div>

                <div className={style.shops__button}>
                    <span>Or filter</span>
                    {buttons}
                    {/* <button className="button">All coffee</button>
                    <button className="button">Brazil</button>
                    <button className="button">Kenya</button>
                    <button className="button">Columbia</button> */}
                    
                </div>

                <div className={style.shops__shopping}>
                    <span>🛒</span>
                    {/* <button>Shopping </button> */}
                    <b>{shopingBucket} $</b>
                </div>
            </div>


            <div className={style.shops__products} >
                {elements}
            </div>

        </section>
    )
}

export default Shops;