/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {connect} from "react-redux"

import HotList from "../../components/hot/Hot"
import {getHotArtList} from "../../redux/HotArticle"

@connect(
    state=>state,
    {getHotArtList}
)
class Hot extends Component {
    componentDidMount(){
        this.props.getHotArtList()
    }
    render(){
        return (
            <div>
                <HotList ArtList={this.props.HotArtList} />
            </div>
        )
    }
}

export default Hot