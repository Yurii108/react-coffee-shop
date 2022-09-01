import './shops.scss';


import Search from '../Search';
import Cards from "../Cards";


const Shops = (props) => {
   const { HeaderMainOpened, data, onToggleShopping, onUpdateSeach, shopingBucket, onUpdateFilter, filter, SearchMenu } = props;

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

   const buttons = buttonsData.map(({ name, lable }) => {
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

   const activeShops = !HeaderMainOpened ? { display: '' } : { display: 'none' };
   const activeBest = !HeaderMainOpened ? { display: 'none' } : { display: '' };
   const activeSearsh = !SearchMenu ? { display: 'none' } : { display: '' };
   const elementsBest = elements.slice(0, 3);

   return (
      <>
         <section className="shops">
            <div className="shops__divider"style={activeShops}></div>

            <div className="wrapper__search"style={activeSearsh}>
               <div className="shops__search">
                  <Search onUpdateSeach={onUpdateSeach} />
               </div>

               <div className="shops__button">
                  <span>Or filter</span>
                  {buttonsFilter}
               </div>

               <div className="shops__shopping">
                  <span><img src="./img/shopping-icon.png" alt="shopping" /></span>
                  <b>{buttonsShopping}</b>
               </div>
            </div>


            <div className="shops__products" style={activeShops}>
               {elements}
            </div>
         </section>

         <section className='best' style={activeBest}>
            <h2 className="subheader best__subheader">Our best</h2>
            <div className="best__all-products" >
               {elementsBest}
            </div>
         </section>
      </>
   )
}

export default Shops;