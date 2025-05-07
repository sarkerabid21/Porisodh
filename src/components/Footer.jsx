import React from 'react';
import { FaFacebook} from 'react-icons/fa';
import { FaGooglePlusG, FaSquareThreads } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-primary text-neutral-content p-10">
  <aside>
    <img className='w-[20%]' src={"https://i.ibb.co.com/7Nn0mC2X/logo.png"} alt=""/>
    <img className='w-[30%]' src={"https://i.ibb.co.com/NnS0NRS8/logoname.png"} alt=""/>

    <p>
    Porishodh – Your simple, secure, and reliable assistant for everyday bill payments.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4 ">
        
        <a href="https://www.google.com"><FaGooglePlusG/></a>
        <a href="https://www.facebook.com/"><FaFacebook/></a>
        <a href="https://www.threads.com/"><FaSquareThreads/></a>
    
    
    
    
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;