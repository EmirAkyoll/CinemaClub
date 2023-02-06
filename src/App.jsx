import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Route, Routes } from 'react-router-dom';
import MoviesPage from './components/Movies/MoviesPage';
import Footer from './components/Footer/Footer';
import HeaderComp from './components/Header/HeaderComp';
import NavigationBar from './components/Navigation/NavigationBar';
import MovieAdd from './components/Movies/MovieAddPage';

function App() {
  return (
    <div className="App">
      <header style={{ marginBottom: '50px' }}>
        <HeaderComp />
      </header>

      <nav style={{ position: 'sticky', top: 0, zIndex: '10', marginBottom: '45px' }}>
        <NavigationBar />
      </nav>

      <Routes>
        <Route path='/' element={<MoviesPage />}></Route>
        <Route path='/add-new-movie' element={<MovieAdd />}></Route>
      </Routes>
      
        <footer style={{ position: 'static', bottom: 0, marginTop: '70px' }}>
          <Footer />
        </footer>
    </div>
  );
}

export default App;