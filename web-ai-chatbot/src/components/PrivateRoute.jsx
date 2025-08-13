import { Navigate } from "react-router"

function PrivateRoute ({children}){

    const isAuthenticated =localStorage.getItem("isAuthenticated")
    return isAuthenticated ? children : <Navigate to="/"/>


}
export default PrivateRoute