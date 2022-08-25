import { useState } from 'react';

import Footer from './components/Footer';
import HeaderMain from './components/Header-main';
import MainDescSection from './components/Main-desc-section';
import HeaderOurCoffee from './components/Header-our-coffee';
import Goods from './components/Goods';
import Shops from './components/Shops';
import OurBest from './components/Our-best';
import NavMenu from './components/Nav-menu';


const items = [
  { title: 'Solimo Coffee Beans 2 kg', prise: 10.73, img: '/img/out-best/b-1.png', id: 1 },
  { title: 'Presto Coffee Beans 1 kg', prise: 15.99, img: '/img/out-best/b-2.png', id: 2 },
  { title: 'AROMISTICO Coffee 1 kg', prise: 6.99, img: '/img/out-best/b-3.png', id: 3 },
  { title: 'Solimo Coffee Beans 2 kg', prise: 10.73, img: '/img/out-best/b-1.png', id: 4 },
  { title: 'Presto Coffee Beans 1 kg', prise: 15.99, img: '/img/out-best/b-2.png', id: 5 },
  { title: 'AROMISTICO Coffee 1 kg', prise: 6.99, img: '/img/out-best/b-3.png', id: 6 }
]


function App() {

  const [HeaderOurCoffeeOpened, setOpenedS] = useState(false);
  const [HeaderMainOpened, setOpenedF] = useState(true);
  // const [items, setItems] = useState([]);

  const onClickOurCoffee = () => {
    setOpenedS(true)
    setOpenedF(false)
  }

  const onHeaderMain = () => {
    setOpenedF(true)
    setOpenedS(false)
  }

  // useEffect(() => {
  //   fetch('https://6304aa4694b8c58fd7225d37.mockapi.io/items')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // }, [])


  return (
    <>
      <NavMenu onClickS={() => onClickOurCoffee()} onClickF={() => onHeaderMain()} />

      {HeaderMainOpened && <HeaderMain />}
      {HeaderOurCoffeeOpened && <HeaderOurCoffee />}

      {HeaderOurCoffeeOpened && <Goods />}
      {HeaderMainOpened && <MainDescSection />}

      {HeaderOurCoffeeOpened && <Shops 
      items={items} />}
      {HeaderMainOpened && <OurBest />}

      <Footer />
    </>
  );
}

export default App;