import React from "react";
import {Link} from "react-router-dom"
import Header from "../../components/Header/Header";
import Alert from "../../components/Alert/Alert";
import {connect} from "react-redux";
import actions from "../../store/actions/sessin"
import "./index.less"
 class Login extends React.Component{
     login=()=>{
        let from = this.props.location.state&&this.props.location.state.from;
         console.log(from);
         this.props.toLogin({username:this.username.value,password:this.password.value},this.props.history.push,from)
     };
    render(){
        return (
            <div className="login container">
               <Header title="登陆"/>
                <ul>
                    <li><input type="text" ref={(username)=>this.username = username}/></li>
                    <li><input type="text" ref={(password)=>this.password = password}/></li>
                    <li><Link to="/reg">前往注册</Link></li>
                    <li>
                        <button onClick={this.login}>登陆</button>
                    </li>
                    <li>
                        <Alert />
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect(state=>({...state.session}),actions)(Login)