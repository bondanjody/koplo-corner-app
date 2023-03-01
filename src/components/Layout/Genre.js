import { Fragment } from 'react';
import classes from './Genre.module.css';
import koploPic from '../../assets/koplo.png';
import campursariPic from '../../assets/campursari.png';

const Genre = () => {
    return <Fragment>
        <div className={classes.container}>
            <div className={classes['genre-container__header']}>
                <h2>Javanese Song Genre</h2>
            </div>
            <div className={classes['genre-container__content']}>
                <div className={classes['genre-content']}>
                    <img src={koploPic} alt='koplo.jpeg' />
                    <div className={classes['genre-description']}>
                        <h4>Koplo</h4>
                        <p>Koplo or dangdut koplo is a subgenre of dangdut, Indonesian popular dance & folk music, that originated in East Java during the early 2000s. The genre gets its name from the slang term "koplo" which refers to a hallucinogenic drug that is sold cheaply in Indonesia.</p>
                    </div>
                </div>
                <div className={classes['genre-vs']}>VS.</div>
                <div className={classes['genre-content']}>
                    <img src={campursariPic} alt='campursari.jpg' />
                    <div className={classes['genre-description']}>
                        <h4>Campursari</h4>
                        <p>Campursari in Indonesian refers to a crossover of several contemporary Indonesian music genres, mainly Javanese Langgam Jawa and Dangdut. The word campursari was coined from the Javanese language, and literally means "mixture of essences".</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Genre;