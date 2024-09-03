import React from 'react';
import { TextField } from '@mui/material';

interface Props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props) => {
    return <TextField
        id="search"
        label="Search for tv shows"
        value={props.value}
        fullWidth
        onChange={props.onChange}
    />
};

export default Search;