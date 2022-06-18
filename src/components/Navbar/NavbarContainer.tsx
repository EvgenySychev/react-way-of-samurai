import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {FriendsInSidebarType} from "../../redux/sidebar-reducer";

type mapStatePropsType = {
    sidebar: FriendsInSidebarType
}

type mapDispatchToPropsType = {

}

export type NavbarType = mapStatePropsType & mapDispatchToPropsType

const mapStateToProps = (state:AppStateType): mapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {

    }
}

export const NavbarContainer = connect (mapStateToProps,mapDispatchToProps)(Navbar)