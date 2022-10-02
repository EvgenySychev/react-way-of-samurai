import React, {ChangeEvent, useState} from 'react'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [localState, setLocalState] = useState(props.status)
    const updateStatus = () => {
        setEditMode(false)
        props.updateStatus(localState)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalState(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => {
                        setEditMode(true)
                    }}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={updateStatus} value={localState}/>
                </div>
            }
        </div>
    )
}
