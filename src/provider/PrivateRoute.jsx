import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loadingg from '../page/Loadingg';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user)
const location = useLocation();
console.log(location)
    if(loading){
        return <Loadingg></Loadingg>;
    }

    if (user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    
};

export default PrivateRoute;