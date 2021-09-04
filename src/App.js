import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './components/Pages/Home'
import Attractions from './components/Pages/Attractions'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'
import About from './components/Pages/About'

function App() {
  return (
    <div className="index">
        <Router>
          <Header />
          <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/attractions' component={Attractions} />
                  <Route exact path='/projects' component={Projects} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/about' component={About} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
