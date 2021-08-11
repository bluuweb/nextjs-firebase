import { useEffect } from "react";
import { useUser } from "../context/userContext";

export default function Home() {
    const { loadingUser, user } = useUser();

    useEffect(() => {
        if (!loadingUser) {
            console.log(user);
        }
        console.log(user);
    }, [user]);

    return (
        <div>
            <main className="container">
                <h1>Firebase</h1>
                <button className="btn btn-primary">Acceder</button>
            </main>
        </div>
    );
}
