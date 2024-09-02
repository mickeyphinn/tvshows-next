import React from 'react';
import { notFound } from "next/navigation";
import tvmazeProvider from '@/src/common/providers/tvmaze';

interface Props {
    params: {
        id?: unknown; 
    }
}

const ShowPage: React.FC = async (props) => {
    const id = Number(props.params.id);

    if (!id) {
        notFound();
    }

    const show = await tvmazeProvider.search('');

    return <div></div>
}

export default ShowPage;