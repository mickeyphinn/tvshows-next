'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Search from '@/src/common/views/search/search';

interface Props {
    query: string;
}

const SearchWithNext: React.FC<Props> = (props) => {
    const router = useRouter();
    const [value, setValue] = React.useState(props.query);

    return <Search
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            router.replace(`?q=${event.target.value}`);
            setValue(event.target.value);
        }}
    />
};

export default SearchWithNext;