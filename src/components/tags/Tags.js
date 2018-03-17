/**
 * Created By brand On 2018/1/19
 */
import React,{Component} from 'react'
import {Tag} from 'antd'
import {Link} from 'react-router-dom'
import './Tag.css'

class Tags extends Component{
    render(){
        const tagList = this.props.tagList || []
        return (
            <div className="side-wrap">
                <h4>文章标签</h4>
                <div className="side-body tags">
                    {
                        tagList.map( (item,key)=><Tag key={key}><Link to={`/tag/${item.tagId}`}>{item.tagName}({item.artNum})</Link></Tag>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Tags
