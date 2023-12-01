import { useContext, useEffect } from "react"
import * as authService from '../../services/authService'
import { useNavigate } from "react-router-dom"
import AuthContext from "../../context/authContext";
import Path from "../../paths";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {

        authService.logout()

        logoutHandler()

        navigate(Path.Home)

    }, []);

    return null
}