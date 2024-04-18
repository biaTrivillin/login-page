import { useAuth } from "../../context/AuthProvider/useAuth";

function ProtectedLayout ({children}: {children: JSX.Element}) {
    const auth = useAuth();

    if (!auth.email) {
        return <h1>you don&apos;t have access</h1>;
    }

    return children;
}

export default ProtectedLayout;