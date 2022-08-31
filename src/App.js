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
      { title: 'Solimo Coffee Beans 2 kg', made: 'Brazil', prise: 10.73, buy: false, img: '/img/out-best/b-1.png', id: 1 },
      { title: 'Presto Coffee Beans 1 kg', made: 'Columbia', prise: 15.99, buy: true, img: '/img/out-best/b-2.png', id: 2 },
      { title: 'AROMISTICO Coffee 1 kg', made: 'Kenya', prise: 6.99, buy: false, img: '/img/out-best/b-3.png', id: 3 },
      { title: 'Solimo Coffee Beans 2 kg', made: 'Brazil', prise: 10.73, buy: false, img: '/img/out-best/b-1.png', id: 4 },
      { title: 'Presto Coffee Beans 1 kg', made: 'Columbia', prise: 15.99, buy: false, img: '/img/out-best/b-2.png', id: 5 },
      { title: 'AROMISTICO Coffee 1 kg', made: 'Brazil', prise: 6.99, buy: false, img: '/img/out-best/b-3.png', id: 6 }
    ],
    HeaderOurCoffeeOpened: true,
    HeaderMainOpened: false,
    shoping: 0,
    term: '',
    filter: 'all'
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
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, buy: !item.buy }

        }
        return item;
      })
    }))
  }

  searchProduct = (items, term) => {
    if (term === 0) {
      return items
    }

    return items.filter(item => {
      return item.title.toLowerCase().indexOf(term) > -1
    })
  }

  onUpdateSeach = (term) => {
    this.setState({ term })
  }

  filterProduct = (items, filter) => {
    switch (filter) {
      case 'brazil':
        return items.filter(item => item.made === 'Brazil')
      case 'сolumbia':
        return items.filter(item => item.made === 'Columbia')
      case 'kenya':
        return items.filter(item => item.made === 'Kenya')
      case 'shopping':
        return items.filter(item => item.buy)
      default:
        return items;
    }
  }



  onUpdateFilter = (filter) => {
    this.setState({ filter })
  }




  render() {
    const { data, term, filter, HeaderMainOpened, HeaderOurCoffeeOpened } = this.state;
    const visibleData = this.filterProduct(this.searchProduct(data, term), filter)
    const shopingBucket = data.filter(item => item.buy)
      .reduce((sum, item) => sum + item.prise, 0) + ' $';

    return (
      <>
        <NavMenu onClickS={this.onClickOurCoffee} onClickF={this.onHeaderMain} />

        {HeaderMainOpened && <HeaderMain />}
        {HeaderOurCoffeeOpened && <HeaderOurCoffee />}

        {HeaderOurCoffeeOpened && <Goods />}
        {HeaderMainOpened && <MainDescSection />}

        {HeaderOurCoffeeOpened && <Shops
          data={visibleData}
          onToggleShopping={this.onToggleShopping}
          onUpdateSeach={this.onUpdateSeach}
          shopingBucket={shopingBucket}
          filter={filter}
          onUpdateFilter={this.onUpdateFilter}
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