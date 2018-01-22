/**
 * Created By brand On 2018/1/20
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getUserData} from '../reducers/UserInfo'
import About from '../components/about/About'

@connect(
    state=>state,
    {getUserData}
)
class AboutMe extends Component {
    componentDidMount(){
        this.props.getUserData({userName: 'admin'})
    }
    render(){
        return (
            <div>
                <About data={this.props.userinfo}/>
            </div>
        )
    }
}

export default AboutMe