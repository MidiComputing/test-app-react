import './App.css';
import {Greet} from './Components/Greet';
/* import Welcome from './Components/Welcome'; */
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<Posts />
      <Home />
      <Greet />
      <About />
      */}
  </div>
  );
}

export default App;
