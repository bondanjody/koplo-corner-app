import { Fragment } from "react";
import Backdrop from "../UI/Backdrop";
import Modal from '../UI/Modal';
import ReactDOM from "react-dom";
import classes from './About.module.css';
import logoPic from '../../assets/logo.png';

const AboutContent = props => {
    return  <Modal>
                <div className={classes.container}>
                    <div className={classes['close-modal']} onClick={props.onHide}>X</div>
                    <div className={classes['about-logo']}>
                        <img src={logoPic} alt={`${logoPic}.png`} />
                    </div>
                    <div className={classes['about-description']}>
                        <p>Koplo Corner is a website that provides information about Javanese songs, such as: translations of lyrics, artists profile, as well as other interesting facts.</p>
                    </div>
                </div>
            </Modal>
}

const About = props => {
    return <Fragment>
        <Backdrop onHide={props.onHide} />
        {ReactDOM.createPortal(<AboutContent onHide={props.onHide} />, document.getElementById('modal'))}
    </Fragment>
}

export default About;