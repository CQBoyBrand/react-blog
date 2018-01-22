/**
 * Created By brand On 2018/1/19
 */
import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class FrendsLink extends Component{
    render(){
        let linkData = this.props.data || []
        return (
            <div className="side-wrap">
                <h4>友情链接</h4>
                <ul className="side-body" style={{paddingBottom:'8px'}}>
                    {linkData.map(
                        (item,key)=>(
                            <li key={key} style={{padding:'5px 0 0',lineHeight:'14px'}}><Link style={{fontSize:'12px'}} target="_blank" to={`${item.linkAddress}`}>{item.linkName}</Link></li>
                        )
                    )}

                </ul>
            </div>
        )
    }
}

export default FrendsLink
