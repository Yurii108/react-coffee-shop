import Cards from './components/Cards';
import Footer from './components/Footer';
import HeaderMain from './components/Header-main';
import MainDescSection from './components/Main-desc-section';
import HeaderOurCoffee from './components/Header-our-coffee';




const products = [
  { title: 'Solimo Coffee Beans 2 kg', prise: 10.73, img: '/img/out-best/b-1.png' },
  { title: 'Presto Coffee Beans 1 kg', prise: 15.99, img: '/img/out-best/b-2.png' },
  { title: 'AROMISTICO Coffee 1 kg', prise: 6.99, img: '/img/out-best/b-3.png' },
]

const productsMore = [
  { title: 'Solimo Coffee Beans 2 kg', prise: 10.73, img: '/img/out-best/b-1.png' },
  { title: 'Presto Coffee Beans 1 kg', prise: 15.99, img: '/img/out-best/b-2.png' },
  { title: 'AROMISTICO Coffee 1 kg', prise: 6.99, img: '/img/out-best/b-3.png' },
  { title: 'Solimo Coffee Beans 2 kg', prise: 10.73, img: '/img/out-best/b-1.png' },
  { title: 'Presto Coffee Beans 1 kg', prise: 15.99, img: '/img/out-best/b-2.png' },
  { title: 'AROMISTICO Coffee 1 kg', prise: 6.99, img: '/img/out-best/b-3.png' },
]

function App() {
  return (
    <div className="wrapper">
      <header className='header' >
        <HeaderMain />
        <HeaderOurCoffee />
      </header>

      <section className='goods'>

        <div className="goods__wrapper_desc">
          <div className="photo goods__photo">
            <img src="/img/Mask.png" alt="Mask" />
          </div>

          <div className='description goods__description'>
            <h2 className="subheader goods__subheader">About our beans</h2>
            <div className="logo goods__logo">
              <div className="logo_divider"></div>
              <div className="logo_img">
                <img src='/img/bg/coffee-beans-black-sec.svg' alt='logo' />
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

      <section className='shops'>
        <div className="divider shops__divider"></div>

        <div className="wrapper__search">
          <div className="shops__search">
            <form >
              <label htmlFor="text">Lookiing for</label>
              <input type="text" placeholder='start typing here...' />
            </form>
          </div>

          <div className="shops__button">
            <span>Or filter</span>
            <button className="button">Brazil</button>
            <button className="button">Kenya</button>
            <button className="button">Columbia</button>
          </div>
        </div>
        
        <div className="shops__products" >
        {productsMore.map((obj) => (
            <Cards title={obj.title} prise={obj.prise} img={obj.img} />
          ))}
        </div>
        
      </section>

      <MainDescSection />

      <section className='best' style={{display: 'none'}}>
        <h2 className="subheader best__subheader">Our best</h2>
        <div className="best__all-products" >
          {products.map((obj) => (
            <Cards title={obj.title} prise={obj.prise} img={obj.img} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
