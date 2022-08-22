import { useState } from 'react';

import styleCards from './carts.module.scss'

console.log(styleCards);

function Cards(props) {
  
  const [isActive, setIsAdd] = useState(false);

  const onClickPlus = () => {
    setIsAdd(!isActive);
    console.log(isActive)
  }

  return (
    <div className={styleCards.product}>
      <div className={styleCards.img_product}>
        <img src={props.img} alt="product-1" />
      </div>
      <p>{props.title}</p>
      <span>Brazil</span>
      <b>{props.prise}$</b>
      <button className={isActive ? styleCards.product__button_active : styleCards.product__button}onClick={onClickPlus}>{isActive ? '✓' : '+'}</button>
    </div>
  )
}

export default Cards;
