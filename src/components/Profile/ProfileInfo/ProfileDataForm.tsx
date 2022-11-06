import React from 'react';

import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { upDateProfileType } from '../../../api/api';
import { upDateProfile } from '../../../redux/profile-reducer';

type ProfileDataFormPropsType = {
  setEditModeCallBack: (editModeDataForm: boolean) => void;
  profile: upDateProfileType;
};

type FormikErrorType = {
  fullName?: string;
  lookingForAJob?: boolean;
  aboutMe?: string;
};

export const ProfileDataForm = ({
  setEditModeCallBack,
  profile,
}: ProfileDataFormPropsType) => {
  const dispatch = useDispatch();

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
        mainLink: profile.contacts.mainLink,
      },
    },
    validate: values => {
      const errors: FormikErrorType = {};

      if (!values.fullName) {
        errors.fullName = 'Required';
      } else if (values.fullName.length < 3) {
        errors.fullName = 'Should be >2 symbols';
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //     errors.email = 'Invalid email address';
      }
      if (!values.aboutMe) {
        errors.aboutMe = 'Required';
      } else if (values.aboutMe.length < 4) {
        errors.aboutMe = 'Should be >5 symbols';
      }

      return errors;
    },
    onSubmit: values => {
      formik.resetForm();
      console.log(values);
      dispatch(upDateProfile(values));
      setEditModeCallBack(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ height: '50px' }}>
        <b>Full name</b>:
        <input
          type="text"
          placeholder="Full name"
          {...formik.getFieldProps('fullName')}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div style={{ color: 'indianred' }}>{formik.errors.fullName}</div>
        ) : null}
      </div>
      <div>
        <b>Looking for a job</b>:
        <input type="checkbox" {...formik.getFieldProps('lookingForAJob')} />
      </div>
      <div>
        <b>My skills and technologies</b>
        <textarea
          placeholder=">My skills and technologies"
          {...formik.getFieldProps('lookingForAJobDescription')}
        />
      </div>
      <div style={{ height: '50px' }}>
        <b>About me</b>:
        <textarea placeholder="About me" {...formik.getFieldProps('aboutMe')} />
        {formik.touched.aboutMe && formik.errors.aboutMe ? (
          <div style={{ color: 'indianred' }}>{formik.errors.aboutMe}</div>
        ) : null}
      </div>
      <div style={{ paddingTop: '10px' }}>
        <b>Contacts</b>:{' '}
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key}>
              <input
                type="text"
                placeholder={key}
                {...formik.getFieldProps(`contacts.${key}`)}
              />
            </div>
          );
        })}
      </div>
      <div>
        <button type="submit">save</button>
      </div>
    </form>
  );
};
