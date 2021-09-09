import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import request from "./request";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      {/* Nav Bar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* simply isLarge likhne ka mtlb h islarge={true}  */}
      <Row title="Netflix Originals" fetchUrl={request.fetchTrending} isLarge />
      <Row title="Trending Now" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
