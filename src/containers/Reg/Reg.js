import React from "react";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../../store/actions/sessin"
import Alert from "../../components/Alert/Alert";
import "./index.less"
 class Reg extends React.Component{
    reg=()=>{
        this.props.toReg({username:this.username.value,password:this.password.value},this.props.history.push)
    };
    render(){
        return (
            <div className="login container">
               <Header title="注册"/>
                <ul>
                    <li><input type="text" ref={(username)=>this.username = username}/></li>
                    <li><input type="text" ref={(password)=>this.password = password}/></li>
                    <li>
                        <button onClick={this.reg}>注册</button>
                    </li>
                    <li><Alert /></li>
                </ul>
            </div>
        )
    }
};
export default connect(state=>({...state.session}),actions)(Reg)