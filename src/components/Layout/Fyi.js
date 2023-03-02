import { Fragment, useState } from "react";
import classes from './Fyi.module.css';
import ketipungPic from '../../assets/ketipung.jpg';
import didiKempotPic from '../../assets/didikempot.jpg';

const Fyi = () => {
    const [showDataFyi, setShowDataFyi] = useState(0);

    const fyiList = [
        {
            id: 1,
            pic: ketipungPic,
            title: 'What do you know about \'ketipung\' ?',
            content: 'Ketipung is a minified version of Javanese musical instrument of Kendang. It is one of the most important instruments in Koplo music, because its role in the music rhythm. Although Ketipung and Kendang are both related, the sound it produces is slightly different. Ketipung has a "cruncy" sound, while Kendang has more "deep" sound.'
        },
        {
            id: 2,
            pic: didiKempotPic,
            title: 'Introducing \'The Godfather of the Broken-Hearted\'',
            content: 'Didi Kempot (31 December 1966 - 5 May 2020) was an Indonesian singer and songwriter in the campursari style. He wrote some 700 songs, mainly in his native Javanese language. Apart from Indonesia, Didi was also popular in Suriname and the Netherlands, both of which have significant Javanese diaspora population. The vast majority of his songs are themed around heartbreaks and other sad love stories. Because of this, he earned the nickname "The Godfather of the Broken-Hearted" during his later years.'
        }

    ];

    const nextHandler = () => {
        setShowDataFyi(prevData => prevData+1);
    }

    const prevHandler = () => {
        setShowDataFyi(prevData => prevData-1);
    }

    return <Fragment>
        <div className={classes['fyi-header']}>
            <h2>For Your Information</h2>
        </div>
        <div className={classes['fyi-container']}>
            <button className={classes['fyi-button']} onClick={prevHandler}>Prev</button>
            <div className={classes['fyi-content']}>
                <div className={classes['fyi-content__header']}>
                    {fyiList[showDataFyi].title}
                </div>
                <div>
                    <img src={fyiList[showDataFyi].pic} className={classes['fyi-image']} alt="ketipung.png" />
                </div>
                <div>
                    {fyiList[showDataFyi].content}
                </div>
            </div>
            <button className={classes['fyi-button']} onClick={nextHandler}>Next</button>
        </div>
    </Fragment>
}

export default Fyi;