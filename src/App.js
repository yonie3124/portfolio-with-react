import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts';
import ProfilePic from './Components/ProfilePics';
import Footer from './Components/Footer';
import Main from './Components/main'




function App() {
  return (
    <BrowserRouter className='totalContent'>
      <Header />
      <Main />
      <div className="App">
        <Routes>
          <Route exact path='/Profile' element={<ProfilePic />} />
          <Route className='Home' exact path='/' element={<Home />} />
          <Route exact path='/Skills' element={<Skills />} />
          <Route exact path='/Portfolio' element={<Portfolio />} />
          <Route exact path='/Contacts' element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
