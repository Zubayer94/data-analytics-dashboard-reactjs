import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    return (
        !!isLoggedIn ? <Navigate to='/test' replace={true} /> : <Outlet />
    );
};

export default PublicRoutes;
