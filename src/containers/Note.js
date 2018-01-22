/**
 * Created By brand On 2018/1/19
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getArtList} from '../reducers/ArticleList'
import ArticleItem from '../components/article/ArticleItem'

@connect(
    state => state,
    {getArtList}
)
class Note extends Component {
    constructor() {
        super()
        this.state = {
            artType: 'Note',
            pageNum: 1,
            pageRow: 10
        }
        this.handerChangePage = this.handerChangePage.bind(this)
    }
    handerChangePage(pageNum){
        this.setState({
            pageNum:pageNum
        },()=>{
            this.props.getArtList(this.state)
        })
    }
    componentDidMount() {
        this.props.getArtList(this.state)
    }

    render() {
        return (
            <div>
                <ArticleItem onClick={this.handerChangePage} total={this.props.articleList.total} data={this.props.articleList.Lists} />
            </div>
        )
    }
}

export default Note