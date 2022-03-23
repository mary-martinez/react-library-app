import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/Main/Main';
import Header from './components/header/Header';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/books/:id'>
            <BookDetail />
          </Route>
          <Route path='/books'>
            <BookList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    // <main className="container">
    //   <h1>Library Catalog</h1>
    //   <BookList />
    // </main>
  );
}

export default App;
