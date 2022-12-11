import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);





function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    </div>
  );
}





function Navbarr() {
  return (
    <>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="/Hammer.JPG" width="30" height="30" class="d-inline-block align-top" alt=""/>
    All The Tools
  </a>
</nav>
    </>
      );
    }
export default Navbarr;    