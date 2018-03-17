/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {connect} from "react-redux"

import Tagfogs from "../../components/tags/Tags"
import {getTagList} from "../../redux/Tags"

@connect(
    state=>state,
    {getTagList}
)
class Tags extends Component {
    componentDidMount() {
        this.props.getTagList()
    }

    render(){
        return (
            <div>
                <Tagfogs tagList={this.props.tagList} />
            </div>
        )
    }
}

export default Tags
