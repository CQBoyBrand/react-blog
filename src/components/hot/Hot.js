/**
 * Created By brand On 2018/1/19
 */
import React,{Component} from 'react'
import {Icon} from "antd"
import {Link} from 'react-router-dom'
import './Hot.css'

class Tags extends Component{
    render(){
        const HotArtList = this.props.ArtList || []
        return (
            <div className="side-wrap">
                <h4>热门文章</h4>
                <ul className="hot-list">
                    {
                        HotArtList.map(
                            (item,key)=>(
                                <li key={key}> <Link to={`/detail/${item.artId}`} title={item.artTitle}><Icon type="double-right" /> {item.artTitle}</Link></li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Tags
