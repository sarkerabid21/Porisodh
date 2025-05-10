import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loadingg from '../page/Loadingg';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                
                <Navbar></Navbar>

                {import.meta.env. VITE_name}
                
                
            </header>
            <main>
                {state=="loading"? <Loadingg/>: <Outlet></Outlet>}
         
            </main>
            
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;