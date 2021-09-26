import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//components
import Header from './components/Header/Header';

//Pages
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import Location from './pages/Location';

function App() {
  return (
    <div className="relative">
      <Router>
        <Header/>
        
        <Switch>
          
          <Route path='/' exact      component={Home}/>
          <Route path='/galeria'     component={Gallery}/>
          <Route path='/pousada'     component={Lodging}/>
          <Route path='/localizacao' component={Location}/>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
