import './App.css';
/* import Welcome from './Components/Welcome'; 
import {Greet} from './Components/Greet';
import Home from './Home';
import About from './About';
import Posts from './Posts';*/
import Navbar from './Components/Include/Navbar';
import Footer from './Components/Include/Footer';
import Movie from './Components/Movie/Movie';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Movie />

      {/*<Posts />
      <Home />
      <Greet />
      <About />
      */}
      <Footer />
  </div>
  );
}

export default App;
