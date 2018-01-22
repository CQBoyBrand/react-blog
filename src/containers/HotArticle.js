/**
 * Created By brand On 2018/1/19
 */
//标签
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getHotArtList} from '../reducers/HotArticle'
import HotArticleItem from '../components/hot-article/HotArticle'

@connect(
    state=>state,
    {getHotArtList}
)
class HotArticle extends Component {
    componentDidMount(){
        this.props.getHotArtList()
    }
    render(){
        return (
            <div>
                <HotArticleItem data={this.props.HotArtList}
                    />
            </div>
        )
    }
}

export default HotArticle