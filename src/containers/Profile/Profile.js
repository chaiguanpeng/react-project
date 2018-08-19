import React from "react";
import {Link} from "react-router-dom";
import bg from "../../images/login_bg.png";
import profile from "../../images/profile.png";
import {connect} from "react-redux";
import actions from "../../store/actions/sessin";
import './index.less'
 class Profile extends React.Component{
    componentDidMount(){
        this.props.toValidate();
    }
    render(){
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={bg} alt=""/>
                    <div className="avatar">
                        <img src={profile} alt=""/>
                    </div>
                    {this.props.user? <a className="btn">{this.props.user}</a>:<Link to="/login" className="btn">登录</Link>}

                </div>
            </div>
        )
    }
};
export default connect(state=>({...state.session}),actions)(Profile)