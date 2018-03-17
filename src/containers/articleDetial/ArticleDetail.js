/**
 * Created By brand On 2018/3/10
 */
import React, {Component} from "react"
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"

import Detial from "../../components/article/ArticleDetial"
import {getDetails} from "../../redux/ArtDetail"

@connect(
    state => state,
    {getDetails}
)
@withRouter
class ArticleDetial extends Component {
    componentDidMount() {
        this.props.getDetails({
            artId: this.props.match.params.id
        })
    }
    componentWillReceiveProps(nextProps){
        let currentId = this.props.match.params.id;
        let nextPropsId = nextProps.match.params.id;
        if (currentId !== nextPropsId) {
            this.props.getDetails({"artId": nextPropsId})
        }
    }
    render() {
        return (
            <div>
                <Detial artDetail={this.props.artDetail}/>
            </div>
        )
    }
}

export default ArticleDetial
