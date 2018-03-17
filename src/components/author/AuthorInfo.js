/**
 * Created By brand On 2018/3/10
 */
import React, {Component} from "react"
import {Link} from "react-router-dom"
import {Icon,Tooltip } from "antd"
import './Author.css'
import img from './xhr.jpg'

class AuthorInfo extends Component {
    render() {
        return (
            <div className="side-wrap author">
                <div style={{textAlign: 'center'}}>
                    <img src={img} alt="重庆崽儿Brand"/>
                </div>
                <p style={{textAlign: 'center',padding: '8px 0 '}}><Icon type="environment-o" />中国，成都</p>
                <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px'}}>重庆崽儿Brand</p>
                <p style={{textAlign: 'center'}}>你敢关注我吗？</p>
                <div className="other-website">
                    <Tooltip placement="top" title="掘金">
                        <Link to="https://juejin.im/user/58bbac26ac502e006b02ce97" target="_blank" title="掘金">
                            <i className="iconfont">&#xe601;</i>
                        </Link>
                    </Tooltip>
                    <Tooltip placement="top" title="Github">
                        <Link to="https://github.com/CQBoyBrand" target="_blank" title="Github">
                            <i className="iconfont">&#xea0a;</i>
                        </Link>
                    </Tooltip>
                    <Tooltip placement="top" title="Segmentfault">
                        <Link to="https://segmentfault.com/u/chongqingerbrand" target="_blank" title="Segmentfault">
                            <i className="iconfont">&#xe600;</i>
                        </Link>
                    </Tooltip>
                    <Tooltip placement="top" title="Email Me">
                        <Link to="mailto:brandhuang2016@163.com" target="_blank">
                            <i className="iconfont">&#xe602;</i>
                        </Link>
                    </Tooltip>



                </div>
            </div>
        )
    }
}

export default AuthorInfo