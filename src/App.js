import './App.css';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className='App'>
    <h1>Anime Lists</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/watching">Currently Watching</Link> |{" "}
      <Link to="/completed-tv">Completed TV</Link> |{" "}
      <Link to="/completed-ovas">Completed OVAs</Link> |{" "}
      <Link to="/completed-specials">Completed Specials</Link> |{" "}
      <Link to="/completed-movies">Completed Movies</Link> |{" "}
      <Link to="/paused">Paused</Link> |{" "}
      <Link to="/planning">Planning</Link> |{" "}
      <Link to="/dropped">Dropped</Link>
    </nav>
  </div>
  );
}