import { useState } from 'react';

import Cards from './components/Cards';
import Footer from './components/Footer';
import HeaderMain from './components/Header-main';
import MainDescSection from './components/Main-desc-section';
import HeaderOurCoffee from './components/Header-our-coffee';
import Goods from './components/goods';




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

const [HeaderOurCoffeeOpened, setOpened] = useState(false);


  return (
    <div className="wrapper">
      <header className='header' >
        <HeaderMain onClickNav={() => setOpened(true)}/>
        {HeaderOurCoffeeOpened && <HeaderOurCoffee />}
      </header>

      <Goods />

      <section className='shops' style={{ display: '' }}>
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
            <Cards title={obj.title}
              prise={obj.prise}
              img={obj.img}
            />
          ))}
        </div>

      </section>

      <MainDescSection />

      <section className='best' style={{ display: 'none'}}>
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
