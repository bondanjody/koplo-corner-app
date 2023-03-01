import { Fragment } from "react";
import classes from './Trending.module.css';
import critoMustahil from '../../assets/crito-mustahil.png';
import lintangSewengi from '../../assets/lintang-sewengi.png';
import mangkuPurel from '../../assets/mangku-purel.png';

const Trending = () => {
    return <Fragment>
        <div className={classes['trending-header']}>
            <h2>Trending</h2>
        </div>
        <div className={classes['trending-contents']}>
            <div>
                <div className={classes['song-image']}>
                    <img src={critoMustahil} alt="critoMustahil.png" />
                </div>
                <div className={classes['song-description']}>
                    <p className={classes['song-title']}>Crito Mustahil </p>
                    <p className={classes['song-title-translation']}>(Impossible Story)</p>
                    <p className={classes['song-artist']}>Denny Caknan</p>
                </div>
            </div>
            <div>
                <div className={classes['song-image']}>
                    <img src={lintangSewengi} alt="lintangSewengi.png" />
                </div>
                <div className={classes['song-description']}>
                    <p className={classes['song-title']}>Lintang Sewengi </p>
                    <p className={classes['song-title-translation']}>(One Night Star)</p>
                    <p className={classes['song-artist']}>Ndarboy Genk</p>
                </div>
            </div>
            <div>
                <div className={classes['song-image']}>
                    <img src={mangkuPurel} alt="mangkuPurel.png" />
                </div>
                <div className={classes['song-description']}>
                    <p className={classes['song-title']}>Mangku Purel </p>
                    <p className={classes['song-title-translation']}>(Got a Slut on You)</p>
                    <p className={classes['song-artist']}>Niken Salindry</p>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Trending;