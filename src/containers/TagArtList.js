/**
 * Created By brand On 2018/1/19
 */
//根据标签查文章列表
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getTagArtList} from '../reducers/TagArtList'
import TagArtListItem from '../components/article/ArticleItem'

@withRouter
@connect(
    state => state,
    {getTagArtList}
)
class TagArtList extends Component {

    componentDidMount() {
        this.props.getTagArtList({
            tagId: this.props.match.params.id,
            pageNum: 1,
            pageRow: 10
        })
    }
    componentWillReceiveProps(nextProps){
        let currentId = this.props.match.params.id;
        let nextPropsId = nextProps.match.params.id;
        if (currentId != nextPropsId) {
            this.props.getTagArtList({
                tagId:nextPropsId,
                pageNum: 1,
                pageRow: 10
            })
        }
    }

    render() {
        let lists = this.props.tagArtList.Lists;
        let totalNum = this.props.tagArtList.total;
        return (
            <div>
                <TagArtListItem data={lists} total={totalNum}/>
            </div>
        )
    }
}

export default TagArtList