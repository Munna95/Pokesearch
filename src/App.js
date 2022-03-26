import Header from './components/Header';
import PokemonCard from './components/Pokemon';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Header />
          <PokemonCard />
      <Footer />
    </div>
    </div>
  );
}

export default App;