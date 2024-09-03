import React from 'react';
import { Entity as EntityProps } from '../../providers/tvmaze';
import Link from 'next/link';
import styles from './card.module.css';

interface Props {
    href: string;
}

const Card: React.FC<EntityProps & Props> = (props) => {
    return props.image?.medium ? (
        <Link className={styles.card} href={props.href} prefetch={true}>
            <img src={props.image.medium} alt={props.name} width={210} height={295} />
            <div className={styles.description}>
                <div className={styles.name}>{props.name}</div>
            </div>
        </Link>
    ) : null
};

export default Card;