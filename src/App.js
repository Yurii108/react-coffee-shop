

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="main">
          <h1 className="main_header">Everything You Love About Coffee</h1>
          <div className="main_logo">
            <div className="main_logo_divider divider"></div>
            <div className="main_logo_img"><img src={require('./img/bg/coffee-beans-white-sec.svg').default} alt='logo'/></div>
            <div className="main_logo_divider divider"></div>
          </div>
          <h2 className="main_subheader">We makes every day full of energy and taste</h2>
            <h2 className="main_subheader">Want to try our beans?</h2>
          <button>More</button>
        </div>
      </header>
      <nav>

        <ul>
          <li>
            <div className="logo_img">
              <img src={require('./img/bg/coffee-beans-white.svg').default} alt='logo'/>
            </div>
            <a href="https://www.facebook.com/profile.php?id=100013564327758">Coffee house
            </a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100013564327758">Our coffee
          </a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100013564327758">For your pleasure
          </a></li>
        </ul>
      </nav>

    </div>
  );
}

export default App;
