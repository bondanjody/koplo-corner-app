import { Fragment } from "react";
import classes from './Header.module.css'
import logoPic from '../../assets/logo.png';

const Header = props => {
    const caretDownIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg>;

    return <Fragment>
        <header className={classes.header}>
            <div className={classes['logo-container']}>
                <a href="#"><img src={logoPic} alt={`${logoPic}.png`} /></a>
            </div>
            <div className={classes.sideMenu}>
                    <div className={classes['catalog']}>
                        <div className={classes['catalog-title']}>
                            <p>Song Catalog</p>
                            {caretDownIcon} 
                        </div>
                        <div className={classes['catalog-dropdown']}>
                            <a href="#">Koplo Songs</a>
                            <a href="#">Campursari Songs</a>
                        </div>
                    </div>
                    <div className={classes['catalog']}>
                        <div className={classes['catalog-title']}>
                            <p>Artist Catalog</p>
                            {caretDownIcon} 
                        </div>
                        <div className={classes['catalog-dropdown']}>
                            <a href="#">Koplo Artist</a>
                            <a href="#">Campursari Artist</a>
                        </div>
                    </div>
                    <a href="#" onClick={props.onAboutClick}>About</a>
                    <a href="#">Contribute</a>
            </div>
        </header>
    </Fragment>
}

export default Header;