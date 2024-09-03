import React from 'react';
import { EntitiesRow } from '../../providers/tvmaze';
import Card from '../card/card';
import styles from './cards-row.module.css';
import { Typography } from '@mui/material';


const CardsRow: React.FC<Omit<EntitiesRow, 'title'> & Pick<Partial<EntitiesRow>, 'title'>> = async (props) => {
    if (props.items.length === 0) {
        return null;
    }

    return (
        <div className={styles.row}>
            {props.title ? <Typography variant='h3'>{props.title}</Typography> : null}
            <div className={styles.cards}>
                {props.items.map((item) => <Card key={item.id} {...item} />)}
            </div>
        </div>
    )
};

export default CardsRow;