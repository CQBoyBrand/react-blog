/**
 * Created By brand On 2018/3/10
 */
import React, {Component} from "react"
import {Row, Col, Card} from 'antd'
import {Link} from "react-router-dom"

import Commenet from '../../containers/comment/Comments'
import "./Friends.css"

const {Meta} = Card;

class Friends extends Component {
    setText = (data)=>{
        if (data.length > 16) {
            var newText = data.substring(0,16)+"...";
            return newText
        }else {
            return data
        }
    }
    render() {
        const linkList = this.props.linkList || []
        const cList = this.props.comment || []
        return (
            <div>
                <div className="friends-link-css">
                    <p>从这里可以去参观大佬的博客，欢迎交换友链 ٩(ˊᗜˋ*)و</p>
                    <p>目前后台功能还没改造完成，友链都是原始的手动添加的</p>
                    <p> 所以希望添加友链的小伙伴按这个格式写在评论区哦！</p>
                    <hr/>
                    <h3>友链格式：</h3>
                    <div className="style-friend-link">
                        <p>网站名称：重庆崽儿rand</p>
                        <p>网站地址：http://www.brandhuang.com</p>
                        <p>头像：http://static.brandhuang.com/images/xhr.jpg</p>
                        <p>网站简介：一句话描述自己或者自己的网站~~</p>
                        <div className="pay-attention">
                            <div className="attentions">注意了！！：</div>
                            <ul>
                                <li>1.禁止任何 广告站、儿童色情站、成人色情站、非法信息站、赌博、本子站、反动反党站等友情链接。</li>
                                <li>2.如果网站超过1周无法访问，那么本站有权利单方面删除友链</li>
                                <li>3.遵循友情-链接，先友情（即先加入本站链接）然后在联系我申请</li>
                            </ul>
                        </div>
                    </div>
                    <ul className="friend-links clearFix">
                        {
                            linkList.map((item, key) => (
                                <li key={key}>
                                    <Link to={`${item.linkAddress}`} target="_blank">
                                        <Card
                                            hoverable={true}
                                            style={{width: "100%"}}
                                            cover={<img className="UserImage" alt={`${item.linkName}`}
                                                        src={`${item.linkAvatar}`}/>}
                                        >
                                            <Meta
                                                title={`${item.linkName}`}
                                                description={this.setText(`${item.linkDescription}`)}
                                            />
                                        </Card>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <Commenet comments={cList}/>
            </div>
        )
    }
}

export default Friends