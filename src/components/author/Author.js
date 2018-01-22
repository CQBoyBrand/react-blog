/**
 * Created By brand On 2018/1/19
 */
import React,{Component} from 'react'
import './Author.css'
import img from './xhr.jpg'

class Author extends Component{
    render(){
        return (
            <div className="side-wrap author">
                <div style={{textAlign:'center'}}>
                    <img src={img} alt="重庆崽儿Brand"/>
                </div>
                <p style={{textAlign:'center',fontWeight:'bold',padding:'8px 0',fontSize:'20px'}}>重庆崽儿Brand</p>
                <p style={{textAlign:'center'}}>中度强迫症患者，美剧爱好者，前端搬砖工</p>
            </div>
        )
    }
}

export default Author
