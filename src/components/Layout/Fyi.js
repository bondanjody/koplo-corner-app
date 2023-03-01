import { Fragment } from "react";
import classes from './Fyi.module.css';
import ketipungPic from '../../assets/ketipung.jpg';

const Fyi = () => {
    return <Fragment>
        <div className={classes['fyi-header']}>
            <h2>For Your Information</h2>
        </div>
        <div className={classes['fyi-container']}>
            <div className={classes['fyi-button']}>Prev</div>
            <div className={classes['fyi-content']}>
                <div>
                    <img src={ketipungPic} className={classes['fyi-image']} alt="ketipung.png" />
                </div>
                <div>
                    <p>Ketipung is a minified version of Javanese musical instrument of Kendang. It is one of the most important instruments in Koplo music, because its role in the music rhythm.</p> 
                    <p>Although Ketipung and Kendang are both related, the sound it produces is slightly different. Ketipung has a "cruncy" sound, while Kendang has more "deep" sound. </p>
                </div>
            </div>
            <div className={classes['fyi-button']}>Next</div>
        </div>
    </Fragment>
}

export default Fyi;