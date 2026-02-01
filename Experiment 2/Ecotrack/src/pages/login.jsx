import {useAuth} from '../context/AuthContext';
import{useNavigate} from 'react-router-dom';
const LoginPage=()=>useAuth();
const {setIsAuthenticated}=useAuth();
const navigate=useNavigate();
const handleLogin=()=>{
    // Perform authentication logic here (e.g., API call)
    // On successful authentication:
    setIsAuthenticated(true);
    navigate('/'); // Redirect to a protected route after login

return(
    <>
    <div>
        <h2>Login Page</h2> 
        <button onClick={handleLogin}>Login to ECOTRACK</button>
    </div>
    </>
);}

export default handleLogin;