import { createContext, useReducer, useEffect } from "react";

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const INITAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandle type ${type} in user reducer`)
    }
};


export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITAL_STATE);
    
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }

    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};