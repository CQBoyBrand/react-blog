/**
 * Created By brand On 2018/1/20
 */
import React, {Component} from 'react'

class About extends Component {
    render() {
        const userData = this.props.data
        return (
            <div style={{background: '#f9f9f9', padding: 30, boxShadow: '1px 1px 5px #aaa'}}>
                <div className="aboutme">
                    <h2 style={{textAlign: 'center'}}>关于我</h2>
                    <div className="content" dangerouslySetInnerHTML={{__html: userData.introduce}}>
                    </div>
                    <h2 style={{textAlign: 'center', marginTop: 20}}>联系我</h2>
                    <div className="contactMe">
                        <p>邮箱：<a href={`mailto:${userData.email}`} style={{color: '#0062cc'}}>{userData.email}</a></p>
                        <p>新浪微博：<a target="_blank" href={`${userData.weibo}`}
                                   style={{color: '#0062cc'}}>{userData.nickName}</a></p>
                        <p>Github：<a target="_blank" href={`${userData.github}`} style={{color: '#0062cc'}}>Brand</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About