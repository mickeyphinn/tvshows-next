'use client';
import React from 'react';
import { TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

interface Props {
    query: string;
}

const Search: React.FC<Props> = (props) => {
    const router = useRouter();
    const [value, setValue] = React.useState(props.query);

    return <TextField
        id="search"
        label="Search for tv shows"
        value={value}
        fullWidth
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            router.replace(`?q=${event.target.value}`);
            setValue(event.target.value);
        }}
    />
};

export default Search;