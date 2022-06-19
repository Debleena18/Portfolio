import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Service from './components/Service/Service';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
// import Works from './components/Works/Works';
// import Testimonials from './components/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      {/* <Works /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}

export default App;
