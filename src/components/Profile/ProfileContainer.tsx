import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {Location} from "history";
import {NavigateFunction} from "react-router/lib/hooks";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type ProfileContainerPropsType = {
    profile: ProfileType
    router: {
        location: Location
        navigate: NavigateFunction
        params: any
    }
    getUserProfile: (data: ProfileType) => void
    isAuth:boolean
}

type mapStatePropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 7429
            console.log(userId)
        }
        console.log(userId)
        this.props.getUserProfile(userId)
    }


    render() {


        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: AppStateType):mapStatePropsType => ({
    profile: state.profilePage.profile
})

function withRouter <T>(Component: ComponentType<T>) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props as T}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose <React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer)