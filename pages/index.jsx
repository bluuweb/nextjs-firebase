import Layout from "../components/layout/Layout";
import { useUser } from "../context/userContext";

export default function Home() {
    const { loadingUser } = useUser();

    if (loadingUser) return <div className="container">Cargando</div>;

    return (
        <Layout>
            <h1>Firebase</h1>
            <button className="btn btn-primary" onClick={loginGoogle}>
                Acceder
            </button>
        </Layout>
    );
}
