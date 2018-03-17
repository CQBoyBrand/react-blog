/**
 * Created By brand On 2018/1/21
 */
import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {Breadcrumb} from 'antd'

@withRouter
class Crumb extends Component{
    constructor(){
        super()
        this.state={
            show:true
        }
    }
    render() {
        let pathname = this.props.location.pathname
        let arr = pathname.split('/')[1];
        let app = '';
        if(arr==='code'){
            app = '文章'
        }
        if(arr==='note'){
            app = '随笔'
        }
        if(arr==='about'){
            app = '关于我'
        }
        if(arr==='detail'){
            app = '文章详情'
        }
        if(arr==='archive'){
            app = '文章归档'
        }
        if(arr==='tag'){
            app = '标签分类'
        }
        if(arr==='friends'){
            app = '友情链接'
        }
        return (
            <div>
                {arr ==='about' ? null:<div style={{padding:'10px',marginBottom:10,boxShadow: "1px 1px 5px #aaa",backgroundColor: "#f9f9f9"}}>
                    <span style={{float:'left'}}>当前位置：</span>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                        {
                            (arr !== '') ? <Breadcrumb.Item>{app}</Breadcrumb.Item> : null
                        }
                    </Breadcrumb>
                </div>}
            </div>

        )
    }
}

export default Crumb