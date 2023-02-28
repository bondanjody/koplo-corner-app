import { Fragment } from "react";
import classes from './Header.module.css'

const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Koplo Corner</h1>
            <div className={classes.sideMenu}>
                <a href="#">About</a>
                <a href="#">Contribute</a>
            </div>
        </header>
    </Fragment>
}

export default Header;