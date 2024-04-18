export interface UserType {
    email?: string;
    token?: string;
}

export interface ContextType extends UserType {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface AuthProviderType {
    children: JSX.Element;
}