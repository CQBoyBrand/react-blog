/**
 * Created By brand On 2018/1/19
 */
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './HotArticle.css'

class HotArticle extends Component{
    render(){
        const HotArtData = this.props.data || []
        return (
            <div className="side-wrap">
                <h4>热门文章</h4>
                <div className="side-body">
                    <ul className="hot-list">
                        {
                            HotArtData.map(
                                (item,key)=>(
                                    <li key={key}> <Link to={`/detail/${item.artId}`}>{item.artTitle}</Link></li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default HotArticle
