import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

/*
type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    setAuthUserData: (id:string,email:string,login:string) => void
}*/


class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        console.log(this.props)

        usersAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);