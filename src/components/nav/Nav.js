/**
 * Created By brand On 2018/1/17
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Media from 'react-media'
import {Dropdown,Button,Icon,Menu} from 'antd';
import Logo from './logo.png'

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            current:'home'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        const menus = (
            <Menu
                style={{lineHeight: '64px',background:'#f9f9f9'}}
            >
                <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
                <Menu.Item key="code"><Link to="/code">文章</Link></Menu.Item>
                <Menu.Item key="note"><Link to="/note">随笔</Link></Menu.Item>
                <Menu.Item key="about"><Link to="/aboutme">关于</Link></Menu.Item>
            </Menu>
        )
        return (
            <div className="top-nav" style={{position: 'fixed', width: '100%', zIndex: '1',background:'#f9f9f9'}}>
                <div className="logo">
                    <Link to="/"><img src={`${Logo}`} alt="重庆崽儿Brand"/></Link>
                </div>
                <Media query="(max-width: 768px)">
                    {matches =>
                        matches ? (
                            <Dropdown overlay={menus} trigger={['click']} placement="bottomRight">
                                <Button style={{float: 'right', marginTop: '16px', marginRight: '15px',background:'#f9f9f9'}}>
                                    <Icon style={{fontSize: 30, color: '#000'}} type="bars"/>
                                </Button>
                            </Dropdown>
                        ) : (
                            <Menu mode="horizontal"
                                  style={{lineHeight: '64px',background:'#f9f9f9'}}>
                                <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
                                <Menu.Item key="code"><Link to="/code">文章</Link></Menu.Item>
                                <Menu.Item key="note"><Link to="/note">随笔</Link></Menu.Item>
                                <Menu.Item key="about"><Link to="/aboutme">关于</Link></Menu.Item>
                            </Menu>
                        )
                    }
                </Media>
            </div>
        )
    }
}

export default Nav