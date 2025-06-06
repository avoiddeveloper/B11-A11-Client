import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/sing-in" state={location.pathname}></Navigate>;
};
export default PrivateRoute;