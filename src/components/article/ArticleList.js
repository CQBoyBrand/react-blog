/**
 * Created By brand On 2018/3/10
 */
import React, {Component} from "react"
import {Link} from "react-router-dom"
import {Pagination} from 'antd';
import "./ArticleList.css"

class ArticleList extends Component {
    onChange = (pageNumber) => {
        this.props.onClick(pageNumber)
    }
    render() {
        let artLists = this.props.artLists || [];//文章列表
        let totalNum = this.props.totalNum;//分页总数
        return (
            <div>
                {artLists.length>0 ? (
                    <div className="article-item-box">
                        {artLists.map((item, key) => (
                            <div key={key} className="article-body">
                                <Link className="article-title" to={`/detail/${item.artId}`}><h4>{item.artTitle}</h4></Link>
                                <p className="article-info">
                                    <span>发布于:{item.artCdate}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span>分类:{item.artType}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span>浏览: {item.readNum}</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span>评论: {item.commentNum}</span>
                                </p>
                                <div className="article-abstract">
                                    {item.artAbstract} ...
                                </div>
                                <span className="article-link" style={{marginTop: '8px', display: 'inline-block'}}>
                        <Link to={`/detail/${item.artId}`}>阅读全文 >></Link>
                    </span>
                            </div>
                        ))}

                        <Pagination showQuickJumper
                                    total={totalNum}
                                    onChange={this.onChange}/>
                    </div>
                ) : (
                    <div style={{height:"100%",textAlign:"center",paddingTop:"20%",boxSizing:"border-box"}}>
                        <div style={{fontSize:"30px"}}>杯具啊！</div>
                        <div>您要找的这个页面可能已经飞走了~~~</div>
                        <div>换篇文章看看...</div>
                    </div>
                )}
            </div>

        )
    }
}

export default ArticleList