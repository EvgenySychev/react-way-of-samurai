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
            } else if (values.password.length < 2) {
                errors.password = 'Invalid password, should be >2 and <16';
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

    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder={"Email"} {...formik.getFieldProps("email")}/>
            </div>
            <div>
                <input type={"password"} placeholder={"Password"} {...formik.getFieldProps("password")}/>
            </div>
            <div>
                <input type="checkbox" onChange={formik.handleChange}
                       checked={formik.values.rememberMe}
                       name="rememberMe"
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>


}