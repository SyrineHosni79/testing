import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Book from './containers/book/Book';
import Author from './containers/author/Author';
import Home from './containers/home/Home'
import AuthorId from './components/authorId/AuthorId';
import BookISBN from './components/bookISBN/BookISBN';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    </div>
    <Route  exact path="/" component= {Home} />
    <Route   exact path="/books"  component={Book}/>
    <Route   exact path="/authors" component= {Author} />
    <Route    path="/book/" component= {BookISBN} />
    <Route  path="/author/" component={AuthorId}/>
</Router>
  );
}
export default App;
