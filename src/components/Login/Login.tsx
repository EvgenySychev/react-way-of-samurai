import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from 'react-router-dom'
import {loginTC} from "../../redux/auth-reducer";
import style from "./Login.module.css"

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captcha?: string
}

export const Login = () => {

    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const captchaUrl = useSelector<AppStateType, string>(state => state.auth.captchaUrl)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
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
        <div className={style.loginWrapper}>
            <div className={style.loginBlock}>
                <h1>LOGIN</h1>
                <div className={style.loginDescription}>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: samara808@yandex.ru</p>
                    <p>Password: 123456789</p>
                </div>

                <form className={style.loginForm} onSubmit={formik.handleSubmit}>
                    <div style={{height: '50px'}}>
                        <input placeholder={"Email"} {...formik.getFieldProps("email")}/>
                        {formik.touched.email && formik.errors.email ?
                            <div
                                style={{color: 'indianred'}}>{formik.errors.email}</div> : null}
                    </div>
                    <div style={{height: '50px'}}>
                        <input type={"password"}
                               placeholder={"Password"} {...formik.getFieldProps("password")}/>
                        {formik.touched.password && formik.errors.password ?
                            <div
                                style={{color: 'indianred'}}>{formik.errors.password}</div> : null}
                    </div>
                    <div style={{height: '50px'}}>
                        <input style={{width: '20px'}} type="checkbox" onChange={formik.handleChange}
                               checked={formik.values.rememberMe}
                               name="rememberMe"
                        /> remember me
                    </div>

                    {captchaUrl && <img src={captchaUrl}/>}
                    {captchaUrl && <input type={"text"}
                                          placeholder={"Add symbols from image"}
                                          {...formik.getFieldProps("captcha")}/>
                    }
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}