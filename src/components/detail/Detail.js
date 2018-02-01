/**
 * Created By brand On 2018/1/20
 */
import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import './detail.css'
import './atom-one-dark.css'
import CodeBlock from './CodeBlock'
import QueueAnim from 'rc-queue-anim';
import Commenet from '../../containers/Comments'

class Detail extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const datas = this.props.data;
        let cList = this.props.comments || [];
        let contentBody = (<div>
            <div key="contentBody"
                 style={{background: '#f9f9f9', padding: 20, boxShadow: '1px 1px 5px #aaa', marginBottom: '10px'}}>
                <h3 className="cq-art-title">{datas.artTitle}</h3>
                <div className="cq-art-info">
                    <span>发布时间：<i>{datas.artCdate}</i></span><span>阅读：<i>{datas.readNum}</i></span><span>评论：<i>{cList.length}</i></span>
                </div>
                <div className="contBody">
                    <ReactMarkdown source={datas.artContent} renderers={{code: CodeBlock}}/>
                </div>
            </div>
            <Commenet comments={this.props.comments}/>
        </div>)
        return (
            <QueueAnim style={{overflow: "hidden"}}
                       animConfig={[
                           {opacity: [1, 0], translateY: [0, 500]},
                           {opacity: [1, 0], translateY: [0, -500]}
                       ]}>
                {this.state.show ? contentBody : null}
            </QueueAnim>
        )
    }
}

export default Detail