import { useRouter } from "next/router";
import { useState, useEffect, createContext, useContext } from "react";
import firebase from "../firebase/clientApp";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const unsubscriber = firebase.auth().onAuthStateChanged((user) => {
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

    const loginGoogle = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            router.push("/perfil");
        } catch (error) {
            console.log(error);
        }
    };

    const cerrarSesion = () => firebase.auth().signOut();

    return (
        <UserContext.Provider
            value={{ user, setUser, loadingUser, cerrarSesion, loginGoogle }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
