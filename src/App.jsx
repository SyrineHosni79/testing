import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Nav from './components/nav/Nav';
import Order from './containers/author/Author';
import Book from './containers/book/Book';
import Author from './containers/author/Author';
import Home from './containers/home/Home'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    </div>
    <Route  exact path="/" component= {Home} />
    <Route  path="/Orders" component= {Order} />
    <Route path="/Books" component= {Book} />
    <Route path="/Authors" component= {Author} />

    </Router>
  );
}

export default App;
