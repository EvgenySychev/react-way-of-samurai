import React, {useState} from 'react'

type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus = ({status}: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => {
                        setEditMode(true)
                    }}>{status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={() => {
                        setEditMode(false)
                    }} value={status}/>
                </div>
            }
        </div>
    )
}
