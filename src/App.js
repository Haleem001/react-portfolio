import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero  from './components/Hero';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Hero />

      <h1 className='font-mono font-bold text-red-400'>
        MG
      </h1>
    </div>
  );
}

export default App;
