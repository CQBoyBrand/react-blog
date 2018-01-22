/**
 * Created By brand On 2018/1/19
 */
//根据标签查文章列表
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getArtListByDate} from '../reducers/ArchiveArtList'
import TagArtListItem from '../components/article/ArticleItem'

@withRouter
@connect(
    state => state,
    {getArtListByDate}
)
class TagArtList extends Component {
    componentDidMount() {
        this.props.getArtListByDate({
            artCdate: this.props.match.params.id,
            pageNum: 1,
            pageRow: 10
        })
    }
    componentWillReceiveProps(nextProps){
        let currentId = this.props.match.params.id;
        let nextPropsId = nextProps.match.params.id;
        if (currentId != nextPropsId) {
            this.props.getArtListByDate({
                artCdate:nextPropsId,
                pageNum: 1,
                pageRow: 10
            })
        }
    }

    render() {
        let lists = this.props.artListByDate.Lists;
        let totalNum = this.props.artListByDate.total;
        return (
            <div>
                <TagArtListItem data={lists} total={totalNum}/>
            </div>
        )
    }
}

export default TagArtList