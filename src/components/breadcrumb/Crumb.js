/**
 * Created By brand On 2018/1/21
 */
import React,{Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {Breadcrumb} from 'antd'

@withRouter
class Crumb extends Component{
    render() {
        let pathname = this.props.location.pathname
        let arr = pathname.split('/')[1];
        let app = '';
        if(arr=='code'){
            app = '文章'
        }
        if(arr=='note'){
            app = '随笔'
        }
        if(arr=='aboutme'){
            app = '关于我'
        }
        if(arr=='detail'){
            app = '文章详情'
        }
        if(arr=='archive'){
            app = '文章归档'
        }
        if(arr=='tag'){
            app = '标签分类'
        }
        return (
            <div style={{background: '#f9f9f9',boxShadow: '1px 1px 5px #aaa',padding:'10px',marginBottom:10}}>
               <span style={{float:'left'}}>当前位置：</span>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                    {
                        (arr != '') ? <Breadcrumb.Item>{app}</Breadcrumb.Item> : null
                    }

                </Breadcrumb>
            </div>
        )
    }
}

export default Crumb