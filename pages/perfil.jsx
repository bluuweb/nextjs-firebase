import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../context/userContext";

import Layout from "../components/layout/Layout";

const Perfil = () => {
    const { loadingUser, user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loadingUser) {
            if (!user) {
                router.push("/");
            }
        }
    }, [user, loadingUser, router]);

    if (loadingUser || user === null)
        return <div className="container">Cargando</div>;

    return (
        <Layout>
            <h1>Acceso Restringido</h1>
        </Layout>
    );
};

export default Perfil;
