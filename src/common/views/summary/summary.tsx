import * as React from 'react';
import { Entity } from '../../providers/tvmaze';
import styles from './summary.module.css';
import { Typography } from '@mui/material';

const Summary: React.FC<Entity> = (props) => {
    return <div className={styles.summary}>
        { props.image?.medium ? (
            <div className={styles.poster}>
                <img src={props.image.medium} alt={props.name} width={210} height={295} />
            </div>
        ) : null }
        <div className={styles.description}>
            <Typography className={styles.title} variant="h2">{props.name}</Typography>
            {props.summary ? (
                <div className={styles.paragraph} dangerouslySetInnerHTML={{__html: props.summary}}/>
            ) : null}
        </div>
    </div>
}

export default Summary;