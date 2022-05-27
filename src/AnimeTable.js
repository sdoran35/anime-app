import { Link } from '@mui/material';
import * as React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        grow: 2,
    },
    {
        name: 'Season | Year',
        selector: row => `${row.season !== null ? row.season : 'None'} | ${row.year !== null ? row.year : 'None'}`,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Started At',
        selector: row => row.startedAt,
    },
    {
        name: 'Completed At',
        selector: row => row.completedAt,
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
        name: 'Episodes',
        selector: row => row.episodes,
    },
    {
        name: 'Chapters',
        selector: row => row.chapters,
        omit: row => row.chapters !== null ? false : true,
    },
    {
        name: 'Volumes',
        selector: row => row.volumes,
        omit: row => row.volumes !== null ? false : true,
    },
    {
        name: 'Site Url',
        selector: row => row.siteUrl,
        grow: 2,
    },
];

/**
 * parse the data from the query
 * 
 * @param {Object} data the data from the query
 */
function parseData(data) {
    let parsedData = [];
    data.forEach(element => {
        parsedData.push({
            title: element.media.title.romaji,
            season : element.media.season,
            year : element.media.seasonYear,
            status: element.status,
            startedAt: new Date(element.startedAt.year, element.startedAt.month, element.startedAt.day).toLocaleDateString(),
            completedAt: new Date(element.completedAt.year, element.completedAt.month, element.completedAt.day).toLocaleDateString(),
            score: element.score,
            progress: element.progress,
            repeat: element.repeat,
            episodes: element.media.episodes,
            chapters: element.media.chapters,
            volumes: element.media.volumes,
            siteUrl: <Link href={element.media.siteUrl}>{element.media.siteUrl}</Link>,
        });
    });
    return parsedData;
}

export default function AnimeTable(props)  {
 
    return (
        <div>
            <DataTable
                title={props.animeTitle}
                columns={columns}
                data={parseData(props.animeList)}
                pagination={true}
            />
        </div>
    );
}