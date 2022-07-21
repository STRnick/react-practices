import React from 'react';
import Card from './Card.js';
import styles from "./assets/css/CardList.css";

const CardList = ({title, cards}) => {
    console.log(title, ":", cards);

    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            {cards.map(card => <Card
                key={card.no}
                no={card.no}
                title={card.title}
                description={card.description}
                status={card.status} />)}
        </div>
    );
}

export default CardList;