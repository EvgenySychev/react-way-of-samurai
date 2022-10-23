import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [localStatus, setLocalStatus] = useState(props.status)

    useEffect(()=>{
        setLocalStatus(props.status)
    },[props.status])

    const updateStatus = () => {
        setEditMode(false)
        props.updateStatus(localStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    return (
        <p>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => {
                        setEditMode(true)
                    }}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={updateStatus} value={localStatus}/>
                </div>
            }
        </p>
    )
}
