import Link from "next/link";
import { useUser } from "../../context/userContext";

const Navbar = () => {
    const { cerrarSesion, user, loginGoogle } = useUser();

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Firebase</a>
                </Link>
                <div>
                    {user ? (
                        <div className="btn btn-danger" onClick={cerrarSesion}>
                            Salir
                        </div>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={loginGoogle}
                        >
                            Google
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
