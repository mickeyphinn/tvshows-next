import React from 'react';
import tvmazeProvider from '../../providers/tvmaze';
import Show from '../show/show';
import styles from './search-results.module.css';

interface Props {
    query: string;
}

const SearchResults: React.FC<Props> = async (props) => {
    const parsedQuery = props.query.trim();
    const data = parsedQuery.length > 0 ? await tvmazeProvider.search(parsedQuery).catch(() => []) : [];
    return <div className={styles.searchResults}>{data.map((item) => <Show key={item.show.id} {...item.show} />)}</div>
};

export default SearchResults;