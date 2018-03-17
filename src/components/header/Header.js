/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {Icon} from "antd"

import "./Header.css"

class Header extends Component {

    render(){
        return (
            <div className="header-css ">
                <div className="header-container clearFix">
                    <div className="logo-css">
                        <a href="/">重庆崽儿Brand</a>
                    </div>
                    <div className="nav-box">
                        <label className="tab-icon" htmlFor="menu-toggle">
                            <Icon type="bars" />
                        </label>
                        <input type="checkbox" id="menu-toggle"/>
                        <ul className="nav-top clearFix">
                            <li><a href="/">首页</a></li>
                            <li><a href="/note">随笔</a></li>
                            {/*<li><a href="/msg">留言</a></li>*/}
                            <li><a href="/friends">友链</a></li>
                            <li><a href="/about">关于</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header