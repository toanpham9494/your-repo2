import "./App.css";
import Row from "./components/Row/Row";
import requests from "./api/requests";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

const data = [
  {
    title: "Trending",
    fetchUrl: requests.trendingMovies,
    isPoster: true,
  },
  {
    title: "Top rated",
    fetchUrl: requests.topRatedMovies,
    isPoster: false,
  },
  {
    title: "Action",
    fetchUrl: requests.actionMovies,
    isPoster: false,
  },
  {
    title: "Adventure",
    fetchUrl: requests.adventureMovies,
    isPoster: false,
  },
  {
    title: "Animation",
    fetchUrl: requests.animationMovies,
    isPoster: false,
  },
  {
    title: "Comedy",
    fetchUrl: requests.comedyMovies,
    isPoster: false,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Banner fetchUrl={requests.trendingMovies} />
      {data.map((item, index) => (
        <Row key={index} {...item} />
      ))}
    </div>
  );
}

export default App;
