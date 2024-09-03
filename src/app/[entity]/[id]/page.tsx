import React from 'react';
import { notFound } from "next/navigation";
import SummaryWithNext from '@/src/next/views/summary/summary';
import SeeAlsoWithNext from '@/src/next/views/see-also/see-also';

interface Props {
    params: {
        entity?: unknown;
        id?: unknown; 
    }
}

const EntityPage: React.FC<Props> = async (props) => {
    const id = Number(props.params.id);
    const entity = props.params.entity === 'shows' || props.params.entity === 'people' ? props.params.entity : undefined;

    if (!entity || !id) {
        notFound();
    }

    return (
        <>
            <React.Suspense>
                <SummaryWithNext entity={entity} id={id} />
            </React.Suspense>
            <React.Suspense>
                <SeeAlsoWithNext entity={entity} id={id} />
            </React.Suspense>
        </>
    )
}

export default EntityPage;