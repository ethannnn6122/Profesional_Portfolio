import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className="footer-copyright text-center py-3 text-muted">
                <p>All Rights Reserved</p>
                <p>Created By Ethan Gruenemeier</p>
            </div>
        </footer>
    )
}

export default Footer;