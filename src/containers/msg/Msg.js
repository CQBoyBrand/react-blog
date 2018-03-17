/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {connect} from "react-redux"

import ArticleList from "../../components/article/ArticleList"

@connect(
    null,
    null
)
class Msg extends Component {
    render(){
        return (
            <div>
                <ArticleList dataFrom={"msg"} />
            </div>
        )
    }
}

export default Msg