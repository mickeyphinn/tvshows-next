import * as React from 'react';
import tvmazeProvider, { EntitiesRow } from '@/src/common/providers/tvmaze';
import { notFound } from 'next/navigation';
import CardsRow from '@/src/common/views/cards-row/cards-row';

interface Props {
    id: number;
    entity: 'shows' | 'people';
}

const SeeAlsoWithNext: React.FC<Props> = async (props) => {
    let row: EntitiesRow;

    try {
        row = await tvmazeProvider.seeAlso(props.entity, props.id);
    } catch (err) {
        console.error(err)
        notFound();
    }

    return <CardsRow {...row} />;
};

export default SeeAlsoWithNext;