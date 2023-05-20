import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <Loading />
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location, alert: 'you have to login first to see toy details' }} to="/login" replace></Navigate>;
};

export default PrivateRoute;