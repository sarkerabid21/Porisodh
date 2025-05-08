import { Outlet } from 'react-router';
import Navbar from '../components/navbar';
import React from 'react';

const AuthLayout = () => {
    return (
        <div>
            <header>
            <Navbar></Navbar>
            </header>
            <main >
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;