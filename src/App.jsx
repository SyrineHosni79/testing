import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Nav from './components/nav/Nav';
import Book from './containers/book/Book';
import Author from './containers/author/Author';
import Home from './containers/home/Home'
import AuthorId from './components/authorId/AuthorId';
import BookISBN from './components/bookisbn/bookISBN';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    </div>
    <Route  exact path="/" component= {Home} />
    <Route  exact path="/books" component={Book}/>
    <Route  path="/books/isbn" component= {BookISBN} />
    <Route  path="/authors/id" component={AuthorId}/>
    <Route exact path="/authors" component= {Author} />
    </Router>
  );
}

export default App;
