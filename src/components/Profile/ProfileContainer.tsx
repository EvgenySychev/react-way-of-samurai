import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus, savePhoto} from "../../redux/profile-reducer";
import {NavigateFunction, useLocation, useNavigate, useParams} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type ProfileContainerPropsType = {
    profile: ProfileType
    status: string
    updateStatus: () => void
    savePhoto: (e:string | Blob) => void
    router: {
        location: Location
        navigate: NavigateFunction
        params: any
    }
    getUserProfile: (data: ProfileType) => void
    getStatus: (data: ProfileType) => void
    isAuth: boolean
    autorizedUserId:number
}

type mapStatePropsType = {
    profile: ProfileType
    status: string
    autorizedUserId: number
    isAuth: boolean

}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = this.props.autorizedUserId
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return <div>
            <Profile {...this.props}
                     isOwner={!this.props.router.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        </div>
    }
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.autorizedUserId,
    isAuth: state.auth.isAuth

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

export const ProfileContainerWrapper = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer)