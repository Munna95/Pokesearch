import Header from './components/Header/Header';
import PokemonCard from './components/Pokemon/Pokemon';
import Footer from './components/Footer/Footer';

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