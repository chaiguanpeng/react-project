import React from "react";
import HomeHeader from "./HomeHeader";
import "./index.less";
import actions from "../../store/actions/home";
import {connect} from "react-redux";
class Home extends React.Component{
    componentDidMount(){
        console.log("props",this.props);
    }
    changeType = (value)=>{
       this.props.setCurrentLesson(value)
    };
    render(){
        return (
            <div>
               <HomeHeader changeType={this.changeType}/>
            </div>
        )
    }
}
//mapStateToProps 讲redux中的数据映射到当前组件的属性中
export default connect((state)=>{
    return {...state.home}
},actions)(Home)