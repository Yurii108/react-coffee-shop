import { Component } from 'react';

import Footer from './components/Footer';
import HeaderMain from './components/Header-main';
import MainDescSection from './components/Main-desc-section';
import HeaderOurCoffee from './components/Header-our-coffee';
import Goods from './components/Goods';
import Shops from './components/Shops';
import OurBest from './components/Our-best';
import NavMenu from './components/Nav-menu';


class App extends Component {
  state = {
    data: [
      { title: 'Solimo Coffee Beans 2 kg', prise: 10.73, buy: false, img: '/img/out-best/b-1.png', id: 1 },
      { title: 'Presto Coffee Beans 1 kg', prise: 15.99, buy: false, img: '/img/out-best/b-2.png', id: 2 },
      { title: 'AROMISTICO Coffee 1 kg', prise: 6.99, buy: false, img: '/img/out-best/b-3.png', id: 3 },
      { title: 'Solimo Coffee Beans 2 kg', prise: 10.73, buy: false, img: '/img/out-best/b-1.png', id: 4 },
      { title: 'Presto Coffee Beans 1 kg', prise: 15.99, buy: false, img: '/img/out-best/b-2.png', id: 5 },
      { title: 'AROMISTICO Coffee 1 kg', prise: 6.99, buy: false, img: '/img/out-best/b-3.png', id: 6 }
    ],
    HeaderOurCoffeeOpened: true,
    HeaderMainOpened: false

  }


  // const [HeaderOurCoffeeOpened, setOpenedS] = useState(false);
  // const [HeaderMainOpened, setOpenedF] = useState(true);


  onClickOurCoffee = () => {
    this.setState({
      HeaderOurCoffeeOpened: true,
      HeaderMainOpened: false
    })
  }

  onHeaderMain = () => {
    this.setState({
      HeaderOurCoffeeOpened: false,
      HeaderMainOpened: true
    })
  }

  onToggleShopping = (id) => {
    this.setState(({ items }) => ({
      items: items.map(even => {
        if (even.id === id) {
          return { ...even, buy: !even.buy }
        }
        return even;
      })
    }))
  }

  render() {
    const { data, HeaderMainOpened, HeaderOurCoffeeOpened } = this.state;
    
    return (
      <>
        <NavMenu onClickS={this.onClickOurCoffee} onClickF={this.onHeaderMain} />

        {HeaderMainOpened && <HeaderMain />}
        {HeaderOurCoffeeOpened && <HeaderOurCoffee />}

        {HeaderOurCoffeeOpened && <Goods />}
        {HeaderMainOpened && <MainDescSection />}

        {HeaderOurCoffeeOpened && <Shops
          data={data}
          onToggleShopping={this.onToggleShopping}
        />}
        {HeaderMainOpened && <OurBest />}

        <Footer />
      </>
    );
  }

}

export default App;


// setItems()
// useEffect(() => {
//   fetch('https://6304aa4694b8c58fd7225d37.mockapi.io/items')
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       setItems(json);
//     });
// }, [])