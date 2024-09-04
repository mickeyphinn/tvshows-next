import React from 'react';
import { notFound } from "next/navigation";
import SummaryWithNext from '@/src/next/views/summary/summary';
import SeeAlsoWithNext from '@/src/next/views/see-also/see-also';
import { Metadata } from 'next';
import tvmazeProvider from '@/src/common/providers/tvmaze';

interface Props {
    params: {
        entity?: unknown;
        id?: unknown; 
    }
}
export function generateStaticParams(): Props['params'][] {   
    return [
        {entity: 'tvshows', id: '1'},
        {entity: 'tvshows', id: '2'},
        {entity: 'tvshows', id: '3'}
    ]
}

// export const dynamic = 'force-static';

export async function generateMetadata(props: Props): Promise<Metadata> { 
    const {entity, id} = parseParams(props);

    const data = await tvmazeProvider.entity(entity, id);

    return {
      title: data.name,
      description: data.summary
    }
  }

const EntityPage: React.FC<Props> = async (props) => {
    const {entity, id} = parseParams(props);

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

function parseParams(props: Props): {entity: 'shows' | 'people'; id: number} {
    const id = Number(props.params.id);
    const entity = props.params.entity === 'shows' || props.params.entity === 'people' ? props.params.entity : undefined;

    if (!entity || !id) {
        notFound();
    }

    return {entity, id};
}

export default EntityPage;