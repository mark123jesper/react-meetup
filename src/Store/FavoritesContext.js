import React, { createContext , useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export const FavoritesContextProvider = (props) => {

    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoritesHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    
    const removeFavoritesHandler = (meetupId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetupId !== meetup.id);
        });
    }

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetupId === meetup.id)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite:itemIsFavoriteHandler
    };


    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;