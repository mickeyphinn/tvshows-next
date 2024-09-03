import React from 'react';
import tvmazeProvider from '../../../common/providers/tvmaze';
import CardsRow from '../../../common/views/cards-row/cards-row';

interface Props {
    entity: 'shows' | 'people';
    query: string;
}

const SearchResultsWithNext: React.FC<Props> = async (props) => {
    const parsedQuery = props.query.trim();
    const data = parsedQuery.length > 0 ? await tvmazeProvider.search(props.entity, parsedQuery).catch(() => []) : [];
    return <CardsRow 
        title={props.entity.slice(0, 1).toUpperCase() + props.entity.slice(1)}
        items={data.map((item) => ({...item, href: `/${props.entity}/${item.id}`}))}
    />
};

export default SearchResultsWithNext;