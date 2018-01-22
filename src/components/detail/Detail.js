/**
 * Created By brand On 2018/1/20
 */
import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import './detail.css'
import './atom-one-dark.css'
import CodeBlock from './CodeBlock'


class Detail extends Component {
    render() {
        const datas = this.props.data
        return (
            <div style={{background: '#f9f9f9', padding: 20, boxShadow: '1px 1px 5px #aaa'}}>
                <h3 className="cq-art-title">{datas.artTitle}</h3>
                <div className="cq-art-info">
                    <span>发布时间：<i>{datas.artCdate}</i></span><span>阅读：<i>{datas.readNum}</i></span><span>评论：<i>0</i></span>
                </div>
                <div className="contBody">{/*
                    <img style={{width: '530px', height: '230px', margin: '15px 0'}} src={`${datas.artThumb}`}
                         alt={`${datas.artTitle}`}/>*/}
                    <ReactMarkdown source={datas.artContent} renderers={{code: CodeBlock}}/>
                </div>
            </div>
        )
    }
}

export default Detail