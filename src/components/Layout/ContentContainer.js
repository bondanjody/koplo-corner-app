import ReactDOM from 'react-dom';
import classes from './ContentContainer.module.css';
import { Fragment } from 'react';
import critoMustahilPic from '../../assets/crito-mustahil.png';
import lintangSewengiPic from '../../assets/lintang-sewengi.png';
import mangkuPurelPic from '../../assets/mangku-purel.png';

const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}

const Content = () => {
    return <div className={classes.modal}>
        <div className={classes['image-container']}>
            <img src={critoMustahilPic} alt='critoMustahil' />
        </div>
        <div className={classes['song-container']}>
            <div className={classes['song-title']}>
                <p>Crito Mustahil</p>
            </div>
            <div className={classes['song-description']}>
                <p>Artist : Denny Caknan</p>
            </div>
            <div className={classes['song-lyrics']}>
                <p className={classes['lyrics-label']}>Lyrics :</p>
                <p>Ini lirik</p>
                <p>Ini lirik</p>
                <p>Ini lirik</p>
                <p>Ini lirik</p>
            </div>
        </div>
    </div>
}

const ContentContainer = () => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<Content />, document.getElementById('modal'))}
        </Fragment>
    )

}

export default ContentContainer;