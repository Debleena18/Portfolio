import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
    </div>
  );
}

export default App;
