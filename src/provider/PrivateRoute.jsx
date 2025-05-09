import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loadingg from '../page/Loadingg';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user)

    if(loading){
        return <Loadingg></Loadingg>;
    }

    if (user && user?.email){
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>
    
};

export default PrivateRoute;