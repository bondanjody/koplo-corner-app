import { Fragment } from "react";
import classes from './Header.module.css'
import logoPic from '../../assets/logo.png';

const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <div className={classes['logo-container']}>
                <a href="#"><img src={logoPic} alt={`${logoPic}.png`} /></a>
            </div>
            <div className={classes.sideMenu}>

                    <a href="#">About</a>
                    <a href="#">Contribute</a>
            </div>
        </header>
    </Fragment>
}

export default Header;