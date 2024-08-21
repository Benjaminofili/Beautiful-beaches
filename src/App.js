import './App.css';
import Header from "./Component/Header";
import Beachinfo from "./Component/Beachinfo";
import Gallery from "./Component/Gallery";
import Download from "./Component/Download";
import Footer from "./Component/Footer";
import Feedback from "./Component/Feedback";
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="/" element={<Beachinfo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
     
      <Footer />
    </div>
  </Router>
  );
}

export default App;
