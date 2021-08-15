import React from 'react';
import Card from '../UI/Card';
import classes from './MeetupItem.module.css';


const MeetupItem = (props) => {
    return (
        <li
            key={props.id}
            className={classes.item}
        >
            <Card>
                <div>
                    <img
                        src={props.image} alt={props.title}
                        className={classes.image}
                    />
                </div>

                <div className={classes.content}>
                    <h3>
                        {props.title}
                    </h3>
                    <address>
                        {props.address}
                    </address>
                    <p>
                        {props.description}
                    </p>
                </div>

                <div className={classes.actions}>
                    <button>
                        Add to Favorites
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem