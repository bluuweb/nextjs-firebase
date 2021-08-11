import UserProvider from "../context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
