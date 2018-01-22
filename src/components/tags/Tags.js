/**
 * Created By brand On 2018/1/19
 */
import React,{Component} from 'react'
import {Tag} from 'antd'
import {Link} from 'react-router-dom'
import './Tag.css'

class Tags extends Component{
    render(){
        const tagsData = this.props.data || []
        return (
            <div className="side-wrap">
                <h4>标签</h4>
                <div className="side-body tags">
                        {
                            tagsData.map( (item,key)=><Tag key={key}><Link to={`/tag/${item.tagId}`}>{item.tagName}({item.artNum})</Link></Tag>
                            )
                        }

                </div>
            </div>
        )
    }
}

export default Tags
