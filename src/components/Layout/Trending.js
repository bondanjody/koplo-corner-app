import { Fragment } from "react";
import classes from './Trending.module.css';

const Trending = props => {
    return <Fragment>
        <div className={classes['trending-header']}>
            <h2>Trending</h2>
        </div>
        <div className={classes['trending-contents']}>
            {props.songData.map(data => (
                <div className={classes['trending-container']} onClick={props.onShow}>
                <div className={classes['trending-ranking']}>
                    <p>{data.chartNumber}</p>
                </div>
                <div className={classes['song-image']}>
                    <img src={data.image} alt={`${data.image}.png`} />
                </div>
                <div className={classes['song-description']}>
                    <p className={classes['song-title']}>{data.title} </p>
                    <p className={classes['song-title-translation']}>({data.titleTranslation})</p>
                    <p className={classes['song-artist']}>{data.artist}</p>
                </div>
            </div>
            ))}
        </div>
    </Fragment>
}

export default Trending;