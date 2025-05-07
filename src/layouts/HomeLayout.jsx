import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                
                <Navbar></Navbar>
                
                
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;