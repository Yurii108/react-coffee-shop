import { useEffect, useState } from 'react';

import Footer from './components/Footer';
import HeaderMain from './components/Header-main';
import MainDescSection from './components/Main-desc-section';
import HeaderOurCoffee from './components/Header-our-coffee';
import Goods from './components/Goods';
import Shops from './components/Shops';
import OurBest from './components/Our-best';

const products = [
  { title: 'Solimo Coffee Beans 2 kg', prise: 10.73, img: '/img/out-best/b-1.png' },
  { title: 'Presto Coffee Beans 1 kg', prise: 15.99, img: '/img/out-best/b-2.png' },
  { title: 'AROMISTICO Coffee 1 kg', prise: 6.99, img: '/img/out-best/b-3.png' },
]


function App() {

  const [HeaderOurCoffeeOpened, setOpened] = useState(true);
  const [items, setItems] = useState([]);

  const onClickOurCoffee = () => {
    setOpened(true)
  }

  useEffect(() => {
    fetch('https://6304aa4694b8c58fd7225d37.mockapi.io/items')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, [])


  return (
    <>
      <HeaderMain onClickNav={() => onClickOurCoffee()} />
      {HeaderOurCoffeeOpened && <HeaderOurCoffee />}

      <Goods />
      <MainDescSection />
      
      <Shops items={items} />
      <OurBest products={products} />

      <Footer />
    </>
  );
}

export default App;