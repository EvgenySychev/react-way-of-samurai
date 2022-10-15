import React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {upDateProfile} from "../../../redux/profile-reducer";
import {upDateProfileType} from "../../../api/api";

type ProfileDataFormPropsType = {
    setEditModeCallBack: (editModeDataForm:boolean)=> void
    profile: upDateProfileType
}

export const ProfileDataForm = ({setEditModeCallBack,profile}: ProfileDataFormPropsType) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            contacts: {
                github: profile.contacts.github,
                vk: profile.contacts.vk,
                facebook: profile.contacts.facebook,
                instagram: profile.contacts.instagram,
                twitter: profile.contacts.twitter,
                website: profile.contacts.website,
                youtube: profile.contacts.youtube,
                mainLink: profile.contacts.mainLink
            }
        },
        // validate: (values) => {
        //     const errors: FormikErrorType = {};
        //     if (!values.email) {
        //         errors.email = 'Required';
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //     }
        //     if (!values.password) {
        //         errors.password = 'Required';
        //     } else if (values.password.length < 5) {
        //         errors.password = 'Invalid password, should be >5 and <16';
        //     }
        //     return errors;
        // },
        onSubmit: values => {
            formik.resetForm()
            console.log(values)
            dispatch(upDateProfile(values))
            setEditModeCallBack(false)
        }
    })

    return <form onSubmit={formik.handleSubmit}>

        <div>

            <button type="submit">save</button>
        </div>
        <div>
            <b>Full name</b>:
            <input type={"text"} placeholder={"Full name"} {...formik.getFieldProps("fullName")} />
        </div>
        <div>
            <b>Looking for a job</b>:
            <input type={"checkbox"} placeholder={"Looking for a job"} {...formik.getFieldProps("lookingForAJob")} />
        </div>
        <div>
            <b>My skills and technologies</b>
            <input type={"text"}
                   placeholder={"lookingForAJobDescription"} {...formik.getFieldProps("lookingForAJobDescription")} />
        </div>
        <div>
            <b>About me</b>:
            <input type={"text"} placeholder={"aboutMe"} {...formik.getFieldProps("aboutMe")} />
        </div>
        <div>
            <b>Vk</b>:
            <input type={"text"} placeholder={"My VK account"} {...formik.getFieldProps("vk")} />
        </div>

        {/*<div>*/}
        {/*    <b>My github</b>:*/}
        {/*    <input type={"text"} placeholder={"github"} {...formik.getFieldProps("contacts.github")} />*/}
        {/* </div>*/}

        {/*<div>*/}
        {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}*/}
        {/*    />*/}
        {/*})}*/}
        {/*</div>*/}
    </form>
}