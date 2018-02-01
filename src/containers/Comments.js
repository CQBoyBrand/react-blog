/**
 * Created By brand On 2018/1/19
 */
//文章页
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addCommentFn,initStatus,initComment} from '../reducers/Comments'
import CommentList from '../components/comment/CommentList'
import CommentInput from '../components/comment/CommentInput'


@connect(
    state=>state,
    {addCommentFn,initStatus,initComment}
)
class Comments extends Component {
    constructor() {
        super()
        this.state = {
            parentId: "",
            toName: "",
            toUserEmail: ""
        }
        this.handlerAdd=this.handlerAdd.bind(this)
        this.resetCommintStatus = this.resetCommintStatus.bind(this)
    }
    componentDidMount(){
        this.props.initComment()
    }
    handlerAdd(data){
        this.props.addCommentFn(data)
    }
    handlerReplyFn(commentId,toName,toUserEmail){
        this.setState({
            parentId: commentId,
            toName: toName,
            toUserEmail: toUserEmail
        })
    }
    resetCommintStatus(){
        this.props.initStatus()
        this.setState({
            parentId: "",
            toName: "",
            toUserEmail: ""
        })
    }
    render(){
        let odlComments= this.props.comments || [];
        let addNew = this.props.commentsData.comments;
        let newComments = [...odlComments,...addNew];
        let status= this.props.commentsData.status;
        return (
            <div className="comment-container">
                {(newComments.length>0)?(
                   <div>
                       <h4 style={{fontWeight: 'bold'}}>共有{newComments.length}条评论</h4>
                       <CommentList repltBtnFn={this.handlerReplyFn.bind(this)} replyData={newComments}/>
                   </div>
                ):null}
                <div>
                    <h4 style={{fontWeight: 'bold'}}>评论</h4>
                    <div style={{textIndent: "3em", fontSize: "12px", color: '#aaa'}}>
                        说明：昵称、邮箱和内容为必填项，网址为选填项，填写邮箱方便及时收到评论的回复，填写网址方便其他小伙伴去参观你的网站~~（邮箱不会在前台展示）
                    </div>
                </div>
                <CommentInput resetCommintStatus={this.resetCommintStatus} replyStatus={status} replyToData={this.state} onSubmitData={this.handlerAdd} />
            </div>
        )
    }
}

export default Comments