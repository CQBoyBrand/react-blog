/**
 * Created By brand On 2018/1/19
 */
//标签
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getTagList} from '../reducers/Tags'
import TagItem from '../components/tags/Tags'

@connect(
    state=>state,
    {getTagList}
)
class Tags extends Component {
    componentDidMount(){
        this.props.getTagList()
    }
    render(){
        return (
            <div>
                <TagItem
                    data={this.props.tagList}/>
            </div>
        )
    }
}

export default Tags