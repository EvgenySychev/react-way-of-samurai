import {ProfileType} from "../../../redux/profile-reducer";


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: ()=>void
}

export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    return <div>
        <div>
            {profile.fullName}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'YES' : 'NO'}
        </div>
        <div>
            {profile.lookingForAJob &&
                <div>
                    <b>My skills and technologies</b>: {profile.lookingForAJobDescription}
                </div>}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            // @ts-ignore
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}
            />
        })}
        </div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
    </div>
}


const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}
