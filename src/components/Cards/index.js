import { useState } from 'react';

import styleCards from './carts.module.scss'


function Cards(props) {
  
  const {img, title, prise} = props;
  
  const [isActive, setIsAdd] = useState(false);

  const onClickPlus = () => {
    setIsAdd(!isActive);
  }

  return (
    <div className={styleCards.product} >
      <div className={styleCards.img_product}>
        <img src={img} alt="product-1" />
      </div>
      <p>{title}</p>
      <span>Brazil</span>
      <b>{prise}$</b>
      <button 
      className={isActive ? styleCards.product__button_active : styleCards.product__button}onClick={onClickPlus}>{isActive ? '✓' : '+'}
      
      </button>
    </div>
  )
}

export default Cards;
