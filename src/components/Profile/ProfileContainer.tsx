import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {NavigateFunction, useLocation, useNavigate, useParams} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type ProfileContainerPropsType = {
    profile: ProfileType
    status:string
    updateStatus: ()=> void
    router: {
        location: Location
        navigate: NavigateFunction
        params: any
    }
    getUserProfile: (data: ProfileType) => void
    getStatus: (data: ProfileType) => void
    isAuth:boolean
}

type mapStatePropsType = {
    profile: ProfileType
    status: string
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 7429
            console.log(userId)
        }
        console.log(userId)
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render() {


        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    }
}

let mapStateToProps = (state: AppStateType):mapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

const withRouter = (Component: any) => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export const ProfileContainerWrapper = compose <React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer)