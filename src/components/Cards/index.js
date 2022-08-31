
import './carts.scss'


function Cards(props) {

  const { img, title, made, prise, onToggleShopping, buy } = props;

  let active = 'product__button';

  if (buy) {
    active += '_active'
  }

  return (
    <div className="product" >
      <div className="img_product">
        <img src={img} alt="product-1" />
      </div>
      <p>{title}</p>
      <span>{made}</span>
      <b>{prise}$</b>
      <button
        className={active}
        onClick={onToggleShopping}>
        {buy ? '✓' : '+'}
      </button>
    </div>
  )
}

export default Cards;
