/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {connect} from "react-redux"

import FriendsList from "../../components/friends/Friends"
import {getWebLinkList} from "../../redux/LinkList"

@connect(
    state=>state,
    {getWebLinkList}
)
class Friends extends Component {
    componentDidMount(){
        this.props.getWebLinkList({
            artId: "friends"
        })
    }
    render(){
        return (
            <div>
                <FriendsList linkList={this.props.linkList.linkList} comment={this.props.linkList.comment} />
            </div>
        )
    }
}

export default Friends