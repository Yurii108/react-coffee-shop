import './goods.scss'


function Goods({ HeaderPleasure }) {

  const imgSrc = !HeaderPleasure ? "img/Mask.png" : "img/Mask-grey.png"
  const subheader = !HeaderPleasure ? 'About our beans' : 'About our goods'

  return (
    <section className='goods'>

      <div className="goods__wrapper_desc" >
        <div className="photo goods__photo">
          <img src={imgSrc} alt="Mask" />
        </div>

        <div className='description goods__description'>
          <h2 className="subheader goods__subheader">{subheader}</h2>
          <div className="logo goods__logo">
            <div className="logo_divider"></div>
            <div className="logo_img">
              <img src='img/bg/coffee-beans-black-sec.svg' alt='logo' />
            </div>
            <div className="logo_divider"></div>
          </div>

          <p className='goods__descr'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br />
            <br />
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions.
            <br />
            <br />
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Goods;