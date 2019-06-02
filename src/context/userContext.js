import React from 'react';

export const UserContext = React.createContext({
    loggedin : false,
    login : null,
    cart : [],
    addToCart : null
})

