import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPokedexPage from "./pages/MainPokedexPage";
import PokemonInfoPage from "./pages/PokemonInfoPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPokedexPage />} />
        <Route path="/pokemon-info" element={<PokemonInfoPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
