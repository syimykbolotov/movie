import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Hero from "./components/Hero";
import MovieDetails from "./Pages/MovieDetails";
import ActorDetails from "./Pages/ActorDetails";
import Search from "./components/Search";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top_rated" element={<TopRated />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/actorDetails/:id" element={<ActorDetails />} />
        <Route path="/search/:movieName" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
