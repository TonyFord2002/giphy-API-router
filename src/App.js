import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Random from './Pages/Random';
import Search from './Pages/Search';
import Trending from './Pages/Trending';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link><br/>
        <Link to='random'>Random Gif</Link><br/>
        <Link to='trending'>Trending Gif</Link><br/>
        <Link to='search'>Search</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/random' element={<Random/>}></Route>
        <Route path='trending' element={<Trending/>}></Route>
        <Route path='search' element={<Search/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
