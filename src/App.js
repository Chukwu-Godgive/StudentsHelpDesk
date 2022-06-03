import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Inquires from './Pages/Inquires/Inquires';
import Faqs from './Pages/Faqs/Faqs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/inquires' element={<Inquires />} />
          <Route path='/faqs' element={<Faqs />} />        
        </Routes>
        <Footer />
      </BrowserRouter>    
  );
}

export default App;
