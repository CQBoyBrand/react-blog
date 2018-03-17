/**
 * Created By brand On 2018/3/10
 */import React,{Component} from "react"
import {connect} from "react-redux"

import AuthorInfo from "../../components/author/AuthorInfo"

@connect(
    null,
    null
)
class Author extends Component {
    render(){
        return (
            <div>
                <AuthorInfo dataFrom={"author"} />
            </div>
        )
    }
}

export default Author
