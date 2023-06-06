
import './App.css';
import Navbar from './Components/Navbar';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Gallery from './pages/gallery/gallery';
import Home from './pages/home/home';
import Models from './pages/models/models';
import NotFound from './pages/notFound/notFound';
import Offer from './pages/offer/offer';
import Products from './pages/products/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
  
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element ={<Contact/>} />
    <Route path='gallery' element={<Gallery />}/>
    <Route path='models' element={<Models />}/>
    <Route path='offer' element={<Offer />}/>
    <Route path='products' element={<Products />}/>
    <Route path='*' element={<NotFound/>} />

    </Routes>

    </BrowserRouter>
  );
}

export default App;
