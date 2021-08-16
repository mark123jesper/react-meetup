import React, {useContext} from 'react';
import FavoritesContext from '../../Store/FavoritesContext';
import Card from '../UI/Card';
import classes from './MeetupItem.module.css';



const MeetupItem = (props) => {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    const toggleFavoritesStatus = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

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
                    <button onClick={toggleFavoritesStatus}>
                        {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem