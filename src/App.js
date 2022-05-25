import logo from './logo.svg';
import './App.css';
import AnimeList from './AnimeList';




function App(props) {
  return (
    <div className="App">
      <AnimeList useQuery={props.useQuery} gql={props.gql} />
    </div>
  );
}

export default App;
