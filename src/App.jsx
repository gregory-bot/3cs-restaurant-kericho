import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Resources from './components/Resources';
import Quote from './components/Quote';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PopUp from './components/PopUp';
import ChatWidget from './components/ChatWidget';
import WhatsAppFab from './components/WhatsAppFab';
import Booking from './components/Booking';

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (service) => {
    setCartItems([...cartItems, service]);
  };

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Services addToCart={addToCart} />
         <Booking />
        <Resources />
        <Quote />
        <About />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <WhatsAppFab />
      {showPopUp && <PopUp onClose={() => setShowPopUp(false)} />}
    </div>
  );
}

export default App;