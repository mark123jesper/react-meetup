import React, { useContext } from 'react';
import MeetupList from '../components/Meetups/MeetupList';
import FavoritesContext from '../Store/FavoritesContext';

const Favorites = () => {

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>Your Favorites is empty</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return (
        <section>
            <h2>
                My Favorites
            </h2>
            {content}
        </section>
    )
}

export default Favorites
