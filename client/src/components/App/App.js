import { Routes, Route } from 'react-router-dom';

import About from '../About/About';
// import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/apropos" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
