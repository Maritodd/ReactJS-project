import React from 'react';
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {setAuthUserData} from "../../redux/auth-reducer";
import {loaderIsFetching} from "../../redux/users-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.loaderIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            this.props.loaderIsFetching(false);
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        })
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

export default connect(mapStateToProps, {loaderIsFetching, setAuthUserData})(HeaderContainer);