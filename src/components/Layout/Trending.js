import { Fragment } from "react";
import classes from './Trending.module.css';
// import critoMustahil from '../../assets/crito-mustahil.png';
// import lintangSewengi from '../../assets/lintang-sewengi.png';
// import mangkuPurel from '../../assets/mangku-purel.png';

const Trending = props => {
    return <Fragment>
        <div className={classes['trending-header']}>
            <h2>Trending</h2>
        </div>
        <div className={classes['trending-contents']}>
            <div className={classes['trending-container']}>
                <div className={classes['trending-ranking']}>
                    <p>{props.songData[0].chartNumber}</p>
                </div>
                <div className={classes['song-image']}>
                    <img src={props.songData[0].image} alt="critoMustahil.png" />
                </div>
                <div className={classes['song-description']}>
                    <p className={classes['song-title']}>{props.songData[0].title} </p>
                    <p className={classes['song-title-translation']}>({props.songData[0].titleTranslation})</p>
                    <p className={classes['song-artist']}>{props.songData[0].artist}</p>
                </div>
            </div>
            <div className={classes['trending-container']}>
            <div className={classes['trending-ranking']}>
                    <p>{props.songData[1].chartNumber}</p>
                </div>
                <div className={classes['song-image']}>
                    <img src={props.songData[1].image} alt="lintangSewengi.png" />
                </div>
                <div className={classes['song-description']}>
                    <p className={classes['song-title']}>{props.songData[1].title} </p>
                    <p className={classes['song-title-translation']}>({props.songData[1].titleTranslation})</p>
                    <p className={classes['song-artist']}>{props.songData[1].artist}</p>
                </div>
            </div>
            <div className={classes['trending-container']}>
            <div className={classes['trending-ranking']}>
                    <p>{props.songData[2].chartNumber}</p>
                </div>
                <div className={classes['song-image']}>
                    <img src={props.songData[2].image} alt="mangkuPurel.png" />
                </div>
                <div className={classes['song-description']}>
                    <p className={classes['song-title']}>{props.songData[2].title} </p>
                    <p className={classes['song-title-translation']}>({props.songData[2].titleTranslation})</p>
                    <p className={classes['song-artist']}>{props.songData[2].artist}</p>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Trending;