import React from 'react';
import './Footer.css'

function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Your E-commerce Site. All rights reserved.</p>
        </footer>
    );
}

export default Footer