import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AnimeTable from './AnimeTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ANIME_LIST, client } from './apollo';
import {
  ApolloProvider,
  useQuery,
} from '@apollo/client';

export default function Main(props) {
  const { error, loading, data } = useQuery(ANIME_LIST, {
    variables: {
      username: props.profile,
      type: props.type
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App profile={'techie3445'} />} />
        <Route path="watching" element={<AnimeTable animeTitle={'Watching'} animeList={data.MediaListCollection.lists[2].entries} />} />
        <Route path="completed-tv" element={<AnimeTable animeTitle={'Completed TV'} animeList={data.MediaListCollection.lists[0].entries} />} />
        <Route path="completed-ovas" element={<AnimeTable animeTitle={'Completed OVAs'} animeList={data.MediaListCollection.lists[6].entries} />} />
        <Route path="completed-specials" element={<AnimeTable animeTitle={'Completed Specials'} animeList={data.MediaListCollection.lists[4].entries} />} />
        <Route path="completed-movies" element={<AnimeTable animeTitle={'Completed Movies'} animeList={data.MediaListCollection.lists[3].entries} />} />
        <Route path="paused" element={<AnimeTable animeTitle={'Paused'} animeList={data.MediaListCollection.lists[1].entries} />} />
        <Route path="planning" element={<AnimeTable animeTitle={'Planning'} animeList={data.MediaListCollection.lists[5].entries} />} />
        <Route path="dropped" element={<AnimeTable animeTitle={'Dropped'} animeList={data.MediaListCollection.lists[7].entries} />} />
      </Routes>
    </BrowserRouter>
  );


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Main profile={'techie3445'} type={'ANIME'}/>
  </ApolloProvider>
);
