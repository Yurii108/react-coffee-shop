

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="main">
          <h1 className="main_header">Everything You Love About Coffee</h1>
          <div className="logo">
            <div className="logo-divider divider"></div>
            <div className="logo-img"><img src="./img/bg/Group.png" alt="" /></div>
          </div>
          <h2 className="main_subheader">We makes every day full of energy and taste
            Want to try our beans?</h2>
          <button>More</button>
        </div>
      </header>
      {/* <div className="nav_main"> */}
        <nav>
          <div className="logo_img"></div>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100013564327758">Coffee house
            </a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100013564327758">Our coffee
            </a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100013564327758">For your pleasure
            </a></li>
          </ul>
        </nav>
      {/* </div> */}

    </div>
  );
}

export default App;
