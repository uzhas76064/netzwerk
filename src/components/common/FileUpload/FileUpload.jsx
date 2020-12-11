import React from 'react';
import classes from './FileUpload.module.css';

const FileUpload = props => {
    return (
        <label className={classes.fileUpload}>
            <input onChange={props.uploadMethod} type="file"/>
            Upload photo <i className="fa fa-camera-retro"/>
        </label>
    );
};

export default FileUpload;
