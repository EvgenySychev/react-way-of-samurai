import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {SidebarType} from "../../redux/sidebar-reducer";

type mapStatePropsType = {
    friendsInSidebar: Array<SidebarType>
}

type mapDispatchToPropsType = {

}

export type NavbarType = mapStatePropsType // & mapDispatchToPropsType

const mapStateToProps = (state:AppStateType) => {
    return {
        friendsInSidebar: state.sidebar.friendsInSidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {

    }
}

export const NavbarContainer = connect<mapStatePropsType, null, any, AppStateType>(mapStateToProps, null)(Navbar)