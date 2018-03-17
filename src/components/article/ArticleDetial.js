/**
 * Created By brand On 2018/3/10
 */
import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import './atom-one-dark.css'
import CodeBlock from './CodeBlock'
import "./ArticleDetial.css"
import Commenet from '../../containers/comment/Comments'

class ArticleDetial extends Component {
    render() {
        const artDetail = this.props.artDetail || {};
        let cList = this.props.artDetail.comment || [];
        return (
            <div>
                {artDetail.artTitle ? (
                    <div>
                        <div className="contentBody" key="contentBody">
                            <h3 className="detail-art-title">{artDetail.artTitle}</h3>
                            <div className="detail-art-info">
                                <span style={{marginRight:"8px"}}>发布于：<i>{artDetail.artCdate}</i></span><span  style={{marginRight:"8px"}}>阅读：<i>{artDetail.readNum}</i></span><span>评论：<i>{cList.length}</i></span>
                            </div>
                            <div className="contBody">
                                <ReactMarkdown source={artDetail.artContent} renderers={{code: CodeBlock}}/>
                            </div>
                        </div>
                        <Commenet comments={cList}/>
                    </div>
                ): <div style={{height:"100%",textAlign:"center",paddingTop:"20%",boxSizing:"border-box"}}>
                    <div style={{fontSize:"30px"}}>杯具啊！</div>
                    <div>您要找的这个页面可能已经飞走了~~~</div>
                    <div>换篇文章看看...</div>
                </div> }

            </div>
        )
    }
}

export default ArticleDetial