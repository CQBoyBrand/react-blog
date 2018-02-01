/**
 * Created By brand On 2018/1/24
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './CommentList.css'

class CommentList extends Component {
    constructor(props) {
        super(props)
        /*this.state = {
            parentId: '',
            toName:''
        }*/
    }
    replyFn(commentId, toName,toUserEmail, e) {
        document.getElementById("Content").focus()
        this.props.repltBtnFn(commentId,toName,toUserEmail)
    }
    render() {
        let commentList = this.props.replyData || [];
        return (
            <div className="List-wrap">
                {commentList.map(
                    (item, key) => (
                        <div key={key}>
                            <div className="commitor"><Link target="_blank" to={`${item.userWebsite}`}>{item.userName}</Link></div>
                            <div className="commit-time">{item.commentTime}</div>
                            {commentList.map(
                                (item2, key2) => (
                                    <div key={key2}>
                                        {
                                            (item.parentCommentId != "") ? (
                                                (item2.commentId == item.parentCommentId) ? ( <div className="reply-to">
                                                    <div className="reply-to-sb">回复：<Link target="_blank" to={`${item2.userWebsite}`}>{item2.userName}</Link></div>
                                                    <div className="reply-to-time">{item2.commentTime}</div>
                                                    <div className="reply-to-content">{item2.Content}</div>
                                                </div>) : null

                                            ) : null
                                        }
                                    </div>
                                )
                            )}
                            <div className="commit-content">{item.Content}</div>
                            <div className="reply-btn" onClick={this.replyFn.bind(this, item.commentId, item.userName,item.userEmail)}>
                                回复
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default CommentList