import React from "react";
import HomeHeader from "./HomeHeader";
import "./index.less";
import actions from "../../store/actions/home";
import {connect} from "react-redux";
import HomeSlider from "./HomeSlider";
import HomeLists from "./HomeList";
import {loadMore,pullRefresh} from "../../util";
import Loading from "../../components/Loading/Loading";
class Home extends React.Component{
    componentDidMount(){
        //切换三个页面时会重新请求，作此优化
        if(!this.props.slider.lists.length){
            this.props.setSliders();
        }
        if(!this.props.lesson.list.length){
            this.props.setLessons(); //获取课程信息
        }
        loadMore(this.x,this.props.setLessons); //加载更多
        pullRefresh(this.x,this.props.refresh);    //下拉刷新
    }
    changeType = (value)=>{
       this.props.setCurrentLesson(value)
    };
    render(){
        return (
            <div>
               <HomeHeader changeType={this.changeType}/>
                <div className="content" ref={x=>this.x=x}>
                    {!this.props.slider.loading?<HomeSlider lists={this.props.slider.lists}/> : <Loading />}
                    <div className="container">
                        <h3><i className="iconfont icon-quanbukecheng"></i>我的课程</h3>
                        <HomeLists lists={this.props.lesson.list}/>
                        {this.props.lesson.loading?  <Loading />:null}
                        {/*<button onClick={()=>{this.props.setLessons()}}>加载更多</button>*/}
                    </div>
                </div>
            </div>
        )
    }
}
//mapStateToProps 讲redux中的数据映射到当前组件的属性中
export default connect((state)=>{
    // console.log(state);
    return {...state.home}
},actions)(Home)