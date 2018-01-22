/**
 * Created By brand On 2018/1/19
 */
import React,{Component} from 'react'

class Link extends Component{
    render(){
        return (
            <div className="side-wrap">
                <h4>友情链接</h4>
                <ul className="side-body">
                    <li style={{padding:'5px 0'}}><a target="_blank" href="http://www.ysu.edu.cn">燕山大学</a></li>
                </ul>
            </div>
        )
    }
}

export default Link
