/**
 * Created By brand On 2018/1/21
 */
import React,{Component} from 'react'
import {Tag} from 'antd'
import {Link} from 'react-router-dom'

class Archive extends Component{
    render(){
        let dateList = this.props.data || []
        return (
            <div className="side-wrap">
                <h4>归档</h4>
                <div className="side-body tags">
                    {
                        dateList.map(
                            (item,key)=>(
                                <Tag key={key}><Link to={`/archive/${item.Archive}`}>{item.Archive}({item.Num})</Link></Tag>
                            )
                        )
                    }

                </div>
            </div>
        )
    }
}

export default Archive