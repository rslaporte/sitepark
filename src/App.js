import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

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
                  <Route exact path='/'>
                    <Home />
                  </Route>

                  <Route path='/attractions'>
                    <Attractions />
                  </Route>

                  <Route path='/projects'>
                    <Projects />
                  </Route>

                  <Route path='/about'>
                    <About />
                  </Route>

                  <Route path='/contact'>
                    <Contact />
                  </Route>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
