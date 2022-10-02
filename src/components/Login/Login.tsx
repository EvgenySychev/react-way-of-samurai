import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from 'react-router-dom'
import {loginTC} from "../../redux/auth-reducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 5) {
                errors.password = 'Invalid password, should be >5 and <16';
            }
            return errors;
        },
        onSubmit: values => {
            formik.resetForm()
            dispatch(loginTC(values))
        }
    })

    if (isLoggedIn) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={formik.handleSubmit}>
                <div style={{height: '50px'}}>
                    <input placeholder={"Email"} {...formik.getFieldProps("email")}/>
                    {formik.touched.email && formik.errors.email ?
                        <div style={{color: 'indianred'}}>{formik.errors.email}</div> : null}
                </div>
                <div style={{height: '50px'}}>
                    <input type={"password"} placeholder={"Password"} {...formik.getFieldProps("password")}/>
                    {formik.touched.password && formik.errors.password ?
                        <div style={{color: 'indianred'}}>{formik.errors.password}</div> : null}
                </div>
                <div style={{height: '50px'}}>
                    <input type="checkbox" onChange={formik.handleChange}
                           checked={formik.values.rememberMe}
                           name="rememberMe"
                    /> remember me
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}