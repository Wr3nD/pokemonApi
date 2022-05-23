import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    SinglePokemon,
    Home,
    Pokemons,
    Errors,
    Berries,
    SingleBerry,
} from "./pages";
import { Footer, Navbar } from "./components";
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} /> */}
                    <Route path="/pokemons" element={<Pokemons />} />
                    <Route path="/pokemons/:id" element={<SinglePokemon />} />
                    <Route path="/berries/:id" element={<SingleBerry />} />
                    <Route path="/berries" element={<Berries />} />
                    <Route path="*" element={<Errors />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
