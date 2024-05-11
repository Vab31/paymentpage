import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prebooking from './payment/prebooking';
import Footer from './payment/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Prebooking />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

