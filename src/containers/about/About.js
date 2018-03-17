/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {connect} from "react-redux"

import AboutMe from "../../components/about/About"
import {getUserData} from "../../redux/UserInfo"

@connect(
    state=>state,
    {getUserData}
)
class About extends Component {
    componentDidMount(){
        this.props.getUserData({userName: 'admin'})
    }
    render(){
        return (
            <div>
                <AboutMe userinfo={this.props.userinfo} />
            </div>
        )
    }
}

export default About