
function Cards(props) {
  return (
    <div className="product best__product">
      <img src={props.img} alt="product-1" />
      <p>{props.title}</p>
      <b>{props.prise}$</b>
      <button className='product__button' >+</button>
    </div>
  )
}

export default Cards;
