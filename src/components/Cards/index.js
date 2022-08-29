
import './carts.scss'


function Cards(props) {

  const { img, title, prise, onToggleShopping } = props;

  return (
    <div className="product" >
      <div className="img_product">
        <img src={img} alt="product-1" />
      </div>
      <p>{title}</p>
      <span>Brazil</span>
      <b>{prise}$</b>
      <button
        className="product__button" 
        onClick={onToggleShopping}>+
          
          {/* {onToggleShopping ? '✓' : '+'} */}

      </button>
    </div>
  )
}

export default Cards;
