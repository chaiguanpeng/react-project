import React from "react";
import HomeHeader from "./HomeHeader";
import "./index.less";
import actions from "../../store/actions/home";
import {connect} from "react-redux";
import HomeSlider from "./HomeSlider";
class Home extends React.Component{
    componentDidMount(){
        this.props.setSliders()
    }
    changeType = (value)=>{
       this.props.setCurrentLesson(value)
    };
    render(){
        return (
            <div>
               <HomeHeader changeType={this.changeType}/>
                <div className="content">
                    {!this.props.slider.loading?<HomeSlider lists={this.props.slider.lists}/> : <div>正在加载中</div>}
                </div>
            </div>
        )
    }
}
//mapStateToProps 讲redux中的数据映射到当前组件的属性中
export default connect((state)=>{
    return {...state.home}
},actions)(Home)