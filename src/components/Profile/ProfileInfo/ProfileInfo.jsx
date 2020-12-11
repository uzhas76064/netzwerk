import React, {useState} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileDataEditForm from "./ProfileDataEditForm";
import FileUpload from "../../common/FileUpload/FileUpload";

const ProfileInfo = (props) => {
    let dummyImg = 'https://dummyimage.com/150x150/c2c0c2/494a4f.png&text=No+image';
    const [editMode, setEditMode] = useState(false);

    if(!props.profile) {
        return <Preloader/>
    }

    const selectMainPhoto = (e) => {
        if(e.target.files.length) {
            props.uploadPhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={classes.profileImageContainer}/>
            <div className={classes.descriptionBlock}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large: dummyImg} alt=""/>
                {props.isOwner ? <FileUpload uploadMethod={selectMainPhoto}/> :null}
            </div>
            {editMode ? <ProfileDataEditForm {...props}/> :<ProfileData {...props}/>}
            {props.isOwner ?
                <button className={classes.editButton} onClick={() => {setEditMode(true)}}>
                    <i className="fa fa-edit"/>
                    Edit profile
                </button>: null}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.website}>
                <a href={props.website}>
                    <i className="fa fa-globe" aria-hidden="true"/>
                    <span>Website</span>
                </a>
            </div>
            <div className={classes.github}>
                <a href={props.github}>
                    <i className="fa fa-github-square" aria-hidden="true"/>
                    <span>Github</span>
                </a>
            </div>
            <div className={classes.facebook}>
                <a href={props.profile.contacts.facebook}>
                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                    <span>Facebook</span>
                </a>
            </div>
            <div className={classes.vk}>
                <a href={props.profile.contacts.vk}>
                    <i className="fa fa-vk" aria-hidden="true"/>
                    <span>VKontakte</span>
                </a>
            </div>
            <div className={classes.twitter}>
                <a href={props.profile.contacts.twitter}>
                    <i className="fa fa-twitter-square" aria-hidden="true"/>
                    <span>Twitter</span>
                </a>
            </div>
            <div className={classes.instagram}>
                <a href={props.profile.contacts.instagram}>
                    <i className="fa fa-instagram" aria-hidden="true"/>
                    <span>Instagram</span>
                </a>
            </div>
            <div className={classes.youtube}>
                <a href={props.profile.contacts.youtube}>
                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                    <span>Youtube</span>
                </a>
            </div>
            <div>
                {props.profile.lookingForAJob ? <span style={{color: "#66BB6A"}}>Need a job: YES</span>: <span style={{color: "#FF7043"}}>Need a job: NO</span>}
            </div>
        </div>
    )
}

export default ProfileInfo;
