import * as React from 'react';
import AnimeTable from './AnimeTable';

export default function AnimeList(props) {

    const ANIME_LIST = props.gql`
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

  
  
    return (
      <div>
        <AnimeTable gql={ANIME_LIST} username={'techie3445'} type={'ANIME'} useQuery={props.useQuery}/>
      </div>
    )
  } 
