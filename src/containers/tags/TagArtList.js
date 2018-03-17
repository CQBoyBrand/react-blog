/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {connect} from "react-redux"

import ArticleList from "../../components/article/ArticleList"
import {getTagArtList} from "../../redux/TagArtList"

@connect(
    state=>state,
    {getTagArtList}
)
class TagArtList extends Component {
    constructor(){
        super()
        this.state={
            tagId: "",
            pageNum: 1,
            pageRow: 10
        }
    }
    componentDidMount(){
        this.setState({
            tagId: this.props.match.params.id
        },()=>{
            this.props.getTagArtList(this.state)
        })
    }
    componentWillReceiveProps(nextProps){
        let currentId = this.props.match.params.id;
        let nextPropsId = nextProps.match.params.id;
        if (currentId !== nextPropsId) {
            this.setState({
                tagId: nextPropsId,
                pageNum: 1,
            },()=>{
                this.props.getTagArtList(this.state)
            })
        }
    }
    handerChangePage=(pageNum)=>{
        this.setState({
            pageNum: pageNum
        },()=>{
            this.props.getTagArtList(this.state)
        })
    }
    render(){
        return (
            <div>
                <ArticleList onClick={this.handerChangePage}
                             artLists={this.props.tagArtList.Lists}
                             totalNum={this.props.tagArtList.total} />
            </div>
        )
    }
}

export default TagArtList