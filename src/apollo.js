import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from '@apollo/client';


export const ANIME_LIST = gql`
query ($username: String, $type: MediaType) {
  MediaListCollection(userName: $username, type: $type) {
    lists {
      entries {
        status
        score(format: POINT_10_DECIMAL)
        progress
        progressVolumes
        repeat
        startedAt {
          year
          month
          day
        }
        completedAt {
          year
          month
          day
        }
        media {
          idMal
          title {
            romaji
          }
          season
          seasonYear
          episodes
          chapters
          volumes
          siteUrl
        }
      }
    }
  }
}
`;

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache()
});

