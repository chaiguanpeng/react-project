import React from "react";
import {Link} from "react-router-dom";
import bg from "../../images/login_bg.png";
import profile from "../../images/profile.png";
import './index.less'
export default class Profile extends React.Component{
    render(){
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={bg} alt=""/>
                    <div className="avatar">
                        <img src={profile} alt=""/>
                    </div>
                    <Link to="/login" className="btn">登录</Link>
                </div>
            </div>
        )
    }
}