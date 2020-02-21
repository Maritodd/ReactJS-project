import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {loaderIsFetching} from "../../redux/users-reducer";
import {loginMe} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.loginMe();
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {loaderIsFetching, loginMe})(HeaderContainer);