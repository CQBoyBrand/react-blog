/**
 * Created By brand On 2018/1/19
 */
//根据标签查文章列表
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getWebLinkList} from '../reducers/LinkList'
import LinkItem from '../components/link/Link'

@withRouter
@connect(
    state => state,
    {getWebLinkList}
)
class LinkList extends Component {

    componentDidMount() {
        this.props.getWebLinkList()
    }

    render() {
        let lists = this.props.linkList;
        return (
            <div>
                <LinkItem data={lists}/>
            </div>
        )
    }
}

export default LinkList