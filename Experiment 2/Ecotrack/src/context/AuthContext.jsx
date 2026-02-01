import { createContext,useContext,usestate} from "react";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const[isAuthenticated, setIsAuthenticated] = usestate(false);
    return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated}}>
    {children}
    </AuthContext.Provider>
);
};
//above we are ceating a context and below we r using the same 
//we used usestate as it saves the state of authentication across the renders
//custom hook below
export const useAuth = () => {
    return useContext(AuthContext);
}