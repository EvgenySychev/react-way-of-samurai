import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {Location} from "history";
import {NavigateFunction} from "react-router/lib/hooks";
import {usersAPI} from "../../api/api";

export type ProfileContainerPropsType = {
    profile: ProfileType
    router: {
        location: Location
        navigate: NavigateFunction
        params:  Readonly<Params<"userId">>
    }
    setUserProfile: (data: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId;

        console.log(this.props)
        console.log(userId)
        usersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
        let params = useParams<'userId'>();

        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));