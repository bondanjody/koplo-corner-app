import classes from './Footer.module.css';
import instagramIcon from '../../assets/instagram.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import { Fragment, useState } from 'react';

const Footer = () => {
    const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(true);

    const submitHandler = () => {
        setShowSubscribeSuccess(false);
    }

    return <div className={classes.footer}>
            <div className={classes['subscribe-section']}>
                <div className={classes['footer-header']}>
                    <p>Subscribe Newsletter</p>
                </div>
                {showSubscribeSuccess && <Fragment>
                    <div className={classes['newsletter-description']}>
                        <p>Get the latest news from our website !</p>
                    </div>
                    <form onSubmit={submitHandler}>
                        <label htmlFor='name'>Your name :</label><br />
                        <input type='text' id='name' /><br />
                        <label htmlFor='email'>Your email :</label><br />
                        <input type='email' id='email' /><br />
                        <button className={classes['subscribe-button']}>Subscribe</button>
                    </form>
                </Fragment>}
                {!showSubscribeSuccess && <div className={classes['subscribe-success']}>
                    <p>Thank you for subscribing us !</p>
                </div>}
            </div>
            <div className={classes['social-section']}>
                <div className={classes['footer-header']}>
                    <p>Contact Us</p>
                </div>
                <div className={classes['contact-us__links']}>
                    <p><a href="https://instagram.com/bondanjs" target='__blank'><img src={instagramIcon} alt='instagram.png' /> @koplocorner</a></p>
                    <p><a href="https://www.facebook.com/BondanJody" target='__blank'><img src={facebookIcon} alt='facebook.png' /> Koplo Corner</a></p>
                    <p><a href="https://www.twitter.com/bondan_js" target='__blank'><img src={twitterIcon} alt='twitter.png' /> @koplo_corner</a></p>
                </div>
            </div>
        </div>
}

export default Footer;