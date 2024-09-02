import React from 'react';
import { Show as ShowProps } from '../../providers/tvmaze';
import Link from 'next/link';
import styles from './show.module.css';

const Show: React.FC<ShowProps> = (props) => {
    return props.image?.medium ? (
        <Link className={styles.show} href={`/show/${props.id}`}>
            <img src={props.image.medium} alt={props.name} />
            <div className={styles.description}>
                <div className={styles.name}>{props.name}</div>
            </div>
        </Link>
    ) : null
};

export default Show;