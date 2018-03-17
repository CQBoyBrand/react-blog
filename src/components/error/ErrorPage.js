/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"

class ErrorPage extends Component {
    render(){
        return (
            <div>
                <div style={{height:"100%",textAlign:"center",paddingTop:"20%",boxSizing:"border-box"}}>
                    <div style={{fontSize:"30px"}}>杯具啊！</div>
                    <div>您要找的这个页面可能已经飞走了~~~</div>
                    <div>换篇文章看看...</div>
                </div>
            </div>
        )
    }
}

export default ErrorPage