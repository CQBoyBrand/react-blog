/**
 * Created By brand On 2018/1/18
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import './ArticleItem.css'
import QueueAnim from 'rc-queue-anim';

class ArticleItem extends Component {
    constructor() {
        super()
        this.handlerClickPage = this.handlerClickPage.bind(this)
    }

    handlerClickPage(pageNumber) {
        this.props.onClick(pageNumber)
    }

    render() {
        const items = this.props.data || [];
        const pageTotal = this.props.total;
        return (
            <div>
                <QueueAnim
                    style={{overflow:"hidden"}}
                    animConfig={[
                        { opacity: [1, 0], translateY: [0, 500] },
                        { opacity: [1, 0], translateY: [0, -500] }
                    ]}>
                {items.map((item, key) => (
                    <div key={key} className="article-body">
                        <Link to={`/detail/${item.artId}`}><h4>{item.artTitle}</h4></Link>
                        <p style={{fontSize: '13px',color:'#aaa'}}>
                            <span>发布于:{item.artCdate}</span>
                            &nbsp;&nbsp;&nbsp;
                            <span>分类:{item.artType} </span>
                            &nbsp;&nbsp;&nbsp;
                            <span>浏览: {item.readNum}</span>
                            &nbsp;&nbsp;&nbsp;
                            <span>评论: 0</span>
                        </p>
                        <div className="article-abstract">
                            {item.artAbstract} ...
                        </div>
                        <span className="article-link" style={{marginTop:'8px',display:'inline-block'}}>
                    <Link to={`/detail/${item.artId}`}>阅读全文 >></Link>
                </span>
                    </div>
                ))}
                {(pageTotal > 10) ? <Pagination key="page" showQuickJumper
                                                defaultCurrent={1}
                                                total={pageTotal}
                                                onChange={this.handlerClickPage}/> : <p key="nothing" style={{
                    textAlign: 'center',
                    background: '#f9f9f9',
                    boxShadow: '1px 1px 5px #aaa',
                    padding: '5px 0'
                }}>暂无更多内容</p>}
                </QueueAnim>
            </div>
        )
    }
}

export default ArticleItem