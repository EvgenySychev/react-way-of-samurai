import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {friendsInSidebarType} from "../../redux/store";

type mapStatePropsType = {
    sidebar: friendsInSidebarType
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