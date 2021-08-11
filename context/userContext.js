import { useState, useEffect, createContext, useContext } from "react";
import firebase from "../firebase/clientApp";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const unsubscriber = firebase
            .auth()
            .onAuthStateChanged(async (user) => {
                try {
                    if (user) {
                        const { uid, displayName, email, photoURL } = user;
                        setUser({ uid, displayName, email, photoURL });
                    } else setUser(null);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoadingUser(false);
                }
            });

        return () => unsubscriber();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loadingUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
