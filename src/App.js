import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Error';
import {Routes, Route} from 'react-router-dom'
import ImageSlider from './components/ImageSlider';
import Firstpage from './components/Firstpage';

function App() {

  return (
    <>
  
      <Header />
      <Routes>
        <Route path='/' element={< Firstpage/>} />
        <Route path='/registration' element={< Home/>} />
        <Route path='/details' element={< Details/>} />
        <Route path='*' element={< Errror/>} />
      </Routes>
    </>
  );
}

export default App;
