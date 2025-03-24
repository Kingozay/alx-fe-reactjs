import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <UserProfile name="Bob" age="30" bio="Enjoys traveling and cooking" />
          </>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;