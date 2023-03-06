import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css';

const Backdrop = props => {
    return <Fragment>
        {ReactDOM.createPortal(<div onClick={props.onHide} className={classes.backdrop}></div>, document.getElementById('backdrop'))}
    </Fragment>
}

export default Backdrop;