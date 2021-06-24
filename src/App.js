import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Landing>
      <About />
      <Portfolio />
      <Contact />
    </Landing>
  );
}

export default App;
