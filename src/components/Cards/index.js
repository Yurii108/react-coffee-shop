import styleCards from './carts.module.scss'

console.log(styleCards);

function Cards(props) {
  return (
    <div className={styleCards.product}>
      <div className={styleCards.img_product}>
      <img src={props.img} alt="product-1" />
      </div>
      <p>{props.title}</p>
      <span>Brazil</span>
      <b>{props.prise}$</b>
      <button className={styleCards.product__button}>+</button>
    </div>
  )
}

export default Cards;
