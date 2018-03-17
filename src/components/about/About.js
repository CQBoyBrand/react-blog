/**
 * Created By brand On 2018/3/10
 */
import React, {Component} from "react"
import {Divider} from "antd"
import "./About.css"

class About extends Component {
    render() {
        const userData = this.props.userinfo
        return (
            <div className="about-css">
                <Divider><h2>关于我</h2></Divider>
                <div className="aboutme">
                    <div className="content" dangerouslySetInnerHTML={{__html: userData.introduce}}>
                    </div>
                    <h2 style={{textAlign: 'center', marginTop: 20}}>关于本站</h2>
                    <div className="contactMe">
                        <p>前端技术栈：React16 + Redux + React-Router4 + Axios + Antd-design</p>
                        <p>后端技术栈：Express4 + Vue2.0</p>
                        <p>服务器：阿里云个人版最低配置，centos7.2</p>
                        <p>博客上线于：2017年12月10日</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About