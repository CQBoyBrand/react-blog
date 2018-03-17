/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {connect} from "react-redux"

import ArticleList from "../../components/article/ArticleList"
import {getArtListByDate} from "../../redux/ArchiveArtList"

@connect(
    state=>state,
    {getArtListByDate}
)
class Achive extends Component {
    constructor(){
        super()
        this.state={
            artCdate: "",
            pageNum: 1,
            pageRow: 10
        }
    }
    componentDidMount(){
        this.setState({
            artCdate: this.props.match.params.date
        },()=>{
            this.props.getArtListByDate(this.state)
        })
    }
    componentWillReceiveProps(nextProps){
        let currentId = this.props.match.params.date;
        let nextPropsId = nextProps.match.params.date;
        if (currentId !== nextPropsId) {
            this.setState({
                artCdate: nextPropsId,
                pageNum:1
            },()=>{
                this.props.getArtListByDate(this.state)
            })
        }
    }
    handerChangePage=(pageNum)=>{
        this.setState({
            pageNum: pageNum
        },()=>{
            this.props.getArtListByDate(this.state)
        })
    }

    render(){
        return (
            <div>
                <ArticleList onClick={this.handerChangePage}
                             artLists={this.props.artListByDate.Lists}
                             totalNum={this.props.artListByDate.total} />
            </div>
        )
    }
}

export default Achive