import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom"; 
import Home from './Home/home'
import Kids from './Kids/kids';
import Events from './Events/events';
import Conservation from './Conservation/conservation';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
      <header>Welcome to Jem Zoo!</header>
      {/* Navigation Bar */}
      <Router >
        <div className="nav">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/conservation">Conservation</Link>
            </li>
          </ul>

          <Switch>
            {/* Homepage */}
            <Route exact path="/home">
              <Home />
            </Route>
            {/* Kids Page */}
            <Route path="/kids">
              <Kids />
            </Route>
            {/* Events Page */}
            <Route path="/events">
              <Events />
            </Route>
            {/* Conservation Page */}
            <Route path="/conservation">
              <Conservation />
            </Route>

          </Switch>
        </div>
      </Router>


      {/* footer Section */}
      <Footer />
    </div>
  );
}

export default App;
