import * as React from 'react';
import tvmazeProvider, { Entity } from '@/src/common/providers/tvmaze';
import { notFound } from 'next/navigation';
import Summary from '@/src/common/views/summary/summary';



interface Props {
    entity: 'shows' | 'people';
    id: number;
}

const SummaryWithNext: React.FC<Props> = async (props) => {

    let entity: Entity;

    try {
        entity = await tvmazeProvider.entity(props.entity, props.id);
    } catch (err) {
        console.error(err)
        notFound();
    }
    
    return <Summary {...entity} />
};

export default SummaryWithNext;