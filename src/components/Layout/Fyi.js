import { Fragment } from "react";
import classes from './Fyi.module.css';
import ketipungPic from '../../assets/ketipung.jpg';
import didiKempotPic from '../../assets/didikempot.jpg';

const Fyi = () => {
    const fyiList = [
        {
            id: 1,
            pic: ketipungPic,
            title: '<p>What do you know about \'ketipung\' ?',
            content: '<p>Ketipung is a minified version of Javanese musical instrument of Kendang. It is one of the most important instruments in Koplo music, because its role in the music rhythm.</p><p>Although Ketipung and Kendang are both related, the sound it produces is slightly different. Ketipung has a "cruncy" sound, while Kendang has more "deep" sound. </p>'
        },
        {
            id: 2,
            pic: didiKempotPic,
            title: '<p>Introducing \'The Godfather of the Broken-Hearted\'</p>',
            content: '<p>Didi Kempot (31 December 1966 – 5 May 2020) was an Indonesian singer and songwriter in the campursari style. He wrote some 700 songs, mainly in his native Javanese language. Apart from Indonesia, Didi was also popular in Suriname and the Netherlands, both of which have significant Javanese diaspora population.</p><p>The vast majority of his songs are themed around heartbreaks and other sad love stories. Because of this, he earned the nickname "The Godfather of the Broken-Hearted" during his later years.</p>'
        }

    ];

    return <Fragment>
        <div className={classes['fyi-header']}>
            <h2>For Your Information</h2>
        </div>
        <div className={classes['fyi-container']}>
            <div className={classes['fyi-button']}>Prev</div>
            <div className={classes['fyi-content']}>
                <div className={classes['fyi-content__header']}>
                    <p>What do you know about 'ketipung' ?</p>
                </div>
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