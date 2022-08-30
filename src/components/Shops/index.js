import style from './shops.module.scss';

import Search from '../Search';
import Cards from "../Cards";


const Shops = ({ data, onToggleShopping, onUpdateSeach }) => {

    const elements = data.map(item => {
        const { id, ...itemsProps } = item;

        return (
            <Cards
                key={id} {...itemsProps}
                onToggleShopping={() => onToggleShopping(id)} />
        )
    });




    return (

        <section className={style.shops} style={{ display: '' }}>
            <div className={style.shops__divider}></div>

            <div className={style.wrapper__search}>
                <div className={style.shops__search}>
                    <Search onUpdateSeach={onUpdateSeach} />
                </div>

                <div className={style.shops__button}>
                    <span>Or filter</span>
                    <button className="button">Brazil</button>
                    <button className="button">Kenya</button>
                    <button className="button">Columbia</button>
                </div>

                <div className={style.shops__shopping}>
                    <span>🛒</span>
                    <span>Shopping</span>
                    <b>1000$</b>
                </div>
            </div>


            <div className={style.shops__products} >
                {elements}
            </div>

        </section>
    )
}

export default Shops;