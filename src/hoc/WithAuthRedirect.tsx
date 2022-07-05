import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirectComponent <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props:mapStateToPropsForRedirectType) => {

        let {isAuth, ...restProps} = props

            if (!isAuth) return <Navigate to={'/login'}/>
            return <Component {...restProps as T}/>

    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectAuthRedirectComponent
}