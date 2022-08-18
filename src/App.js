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

function App() {
  return (
    <div className="wrapper">
      <header className='header' >
        <HeaderMain />
        <HeaderOurCoffee />
      </header>

      <MainDescSection />

      <section className='best' style={{display: 'none'}}>
        <h2 className="subheader best__subheader">Our best</h2>
        <div className="best__all-products">
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
