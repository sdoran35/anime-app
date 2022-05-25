import * as React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Season | Year',
        selector: row => row.season,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Score',
        selector: row => row.score,
    },
    {
        name: 'Progress',
        selector: row => row.progress,
    },
    {
        name: 'Repeat',
        selector: row => row.repeat,
    },
    {
        name: 'Info (Episodes | Chapters | Volumes)',
        selector: row => row.info,
    },
    {
        name: 'Site Url',
        selector: row => row.siteUrl,
    },
];

function parseData(data, display) {
    let parsedData = [];
    data.forEach(element => {
        parsedData.push({
            title: element.media.title.romaji,
            display ? ( 'season' : `${element.media.season} | ${element.media.seasonYear}`) : season: element.media.season,
            status: element.status,
            score: element.score,
            progress: element.progress,
            repeat: element.repeat,
            info: `${element.media.episodes !== null ? element.media.episodes : 'None'} 
            | ${element.media.chapters !== null ? element.media.chapters : 'None'} 
            | ${element.media.volumes  !== null ? element.media.volumes : 'None'} `,
            siteUrl: element.media.siteUrl
        });
    });
    return parsedData;
}

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

export default function AnimeTable(props) {
    const { loading, error, data } = props.useQuery(props.gql, {
        variables: {
            username: props.username,
            type: props.type
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const completedSpecialList = parseData(data.MediaListCollection.lists[4].entries);

    return (
        <div>
            <DataTable
                title="Completed Specials"
                columns={columns}
                data={completedSpecialList}
                expandableRows={true}
                expandableRowsComponent={ExpandedComponent}
            />
        </div>
    );
}
