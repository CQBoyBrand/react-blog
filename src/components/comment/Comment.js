/**
 * Created By brand On 2018/1/23
 */
import React, {Component} from 'react'
import './comment.css'
import CommentInput from './CommentInput'
import {message, Form, Icon, Row, Col, Input, Button} from 'antd'
import CommentList from './CommentList'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentId: '',
            toName: ''
        }
        this.getFormDatas = this.getFormDatas.bind(this)
    }

    getFormDatas(datas) {
        this.props.onSubmitData(datas)
    }

    replyFn(commentId, toName, e) {
        document.getElementById("Content").focus()
        this.setState({
            parentId: commentId,
            toName: toName
        })
    }

    render() {
        let commentList = this.props.data || [];
        //列表
        let allComment = (<div>
            <h4 style={{fontWeight: 'bold'}}>共有{commentList.length}条评论</h4>
            <div className="List-wrap">
                {commentList.map(
                    (item, key) => (
                        <div key={key}>
                            <div className="commitor">{item.userName}</div>
                            <div className="commit-time">{item.commentTime}</div>
                            {commentList.map(
                                (item2, key2) => (
                                    <div key={key2}>
                                        {
                                            (item.parentCommentId != "") ? (
                                                (item2.commentId == item.parentCommentId) ? ( <div className="reply-to">
                                                    <div className="reply-to-sb">回复：{item2.userName}</div>
                                                    <div className="reply-to-time">{item2.commentTime}</div>
                                                    <div className="reply-to-content">{item2.Content}</div>
                                                </div>) : null

                                            ) : null
                                        }
                                    </div>
                                )
                            )}
                            <div className="commit-content">{item.Content}</div>
                            <div className="reply-btn" onClick={this.replyFn.bind(this, item.commentId, item.userName)}>
                                回复
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>)
        return (
            <div className="comment-container">
                {(commentList.length > 0) ? allComment : null}
                <div>
                    <h4 style={{fontWeight: 'bold'}}>评论</h4>
                    <div style={{textIndent: "3em", fontSize: "12px", color: '#aaa'}}>
                        说明：昵称、邮箱和内容为必填项，网址为选填项，填写邮箱方便及时收到评论的回复，填写网址方便其他小伙伴去参观你的网站~~（邮箱不会在前台展示）
                    </div>
                </div>
                <div>
                    <CommentInput replyStatus={this.props.status} replyData={this.state}
                                  submitdata={this.getFormDatas}/>
                </div>
            </div>
        )
    }
}

export default Comment