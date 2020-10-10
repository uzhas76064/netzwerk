import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const toggleMode = () => {
        setEditMode(!editMode);
        if (editMode)
            props.updateStatus(status);
    }

    const onInputChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            {!editMode ? <q onDoubleClick={toggleMode}>{status || 'no status'}</q> :
                <input onChange={onInputChange} onBlur={toggleMode} autoFocus={true} value={status}
                       type="text"/>}
        </div>
    );
}

export default ProfileStatus;