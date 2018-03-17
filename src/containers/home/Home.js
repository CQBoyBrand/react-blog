/**
 * Created By brand On 2018/3/10
 */
import React, {Component} from "react"
import {connect} from "react-redux"

import ArticleList from "../../components/article/ArticleList"
import {getArtList} from "../../redux/ArticleList"

@connect(
    state=>state,
    {getArtList}
)
class Home extends Component {
    constructor() {
        super();
        this.state = {
            pageNum: 1,
            pageRow: 10
        }
    }

    componentDidMount() {
        this.props.getArtList(this.state)
    }
    handerChangePage=(pageNum)=>{
        this.setState({
            pageNum:pageNum
        },()=>{
            this.props.getArtList(this.state)
        })
    }

    render() {
        return (
            <div>
                <ArticleList onClick={this.handerChangePage}
                             artLists={this.props.frontArtList.artLists}
                             totalNum={this.props.frontArtList.total}/>
            </div>
        )
    }
}

export default Home