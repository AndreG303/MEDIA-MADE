import { createContext } from 'react';

const UserContext = createContext({
    email: "",
    setEmail: () => { },
    username: "",
    setUsername: () => { },
    loggedIn: false,
    setLoggedIn: () => { },
    showUserOutfits: [],
    setShowUserOutfits: () => { }
});

export default UserContext;