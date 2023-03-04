import ReactDOM from 'react-dom';
import classes from './ContentContainer.module.css';
import { Fragment } from 'react';
import critoMustahilPic from '../../assets/crito-mustahil.png';
import lintangSewengiPic from '../../assets/lintang-sewengi.png';
import mangkuPurelPic from '../../assets/mangku-purel.png';

const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}

const Content = props => {
    return <div className={classes.modal}>
        <div className={classes['image-container']}>
            <img src={critoMustahilPic} alt='critoMustahil' />
        </div>
        <div className={classes['song-container']}>
            <div className={classes['close-lyrics']} onClick={props.onHide}>X</div>
            <div className={classes['song-title']}>
                <p className={classes['title']}>Crito Mustahil</p>
                <p className={classes['title-translation']}>(Impossible Story)</p>
            </div>
            <div className={classes['song-description']}>
                <p>Artist : Denny Caknan</p>
            </div>
            <div className={classes['song-lyrics']}>
                <div className={classes['lyrics-label']}>
                    <p>Lyrics :</p>
                </div>
                <div className={classes['lyrics-content']} dangerouslySetInnerHTML={{__html: props.lyricsData[0].lyrics}}>
                </div>
            </div>
        </div>
    </div>
}

const ContentContainer = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<Content lyricsData={props.lyricsData} onHide={props.onHide} />, document.getElementById('modal'))}
        </Fragment>
    )

}

export default ContentContainer;