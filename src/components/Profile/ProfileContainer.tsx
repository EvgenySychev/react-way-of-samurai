import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {Location} from "history";
import {NavigateFunction} from "react-router/lib/hooks";

export type ProfileContainerPropsType = {
    profile: ProfileType
    router: {
        location: Location
        navigate: NavigateFunction
        params: any
    }
    getUserProfile: (data: ProfileType) => void
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

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        console.log(params)

        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));