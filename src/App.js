import React, {Component} from 'react'
import {Switch, Route, withRouter,Redirect} from 'react-router-dom'
import {Row, Col, BackTop} from 'antd';

import Header from './components/header/Header'//页头
import Footer from './components/footer/Footer'//页尾
import ErrorPage from './components/error/ErrorPage'//404页面
import Crumb from './components/breadcrumb/Crumb'//面包屑导航

import Home from './containers/home/Home'//首页
import Note from './containers/note/Note'//随笔页面
import ArchiveArtList from './containers/archive/ArchiveArtList'
import Msg from './containers/msg/Msg'
import Friends from './containers/friends/Friends'
import About from './containers/about/About'
import SideBar from './containers/side-bar/SideBar'
import ArticleDetail from './containers/articleDetial/ArticleDetail'
import ArticleListByTag from './containers/tags/TagArtList'

@withRouter
class App extends Component {
    componentWillReceiveProps(nextProps) {
        //当路由切换时回到顶部
        if (this.props.location !== nextProps.location) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <div style={{maxWidth: "1200px", margin: "0 auto", padding: "60px 15px 0", boxSizing: "border-box"}}>
                    <Crumb/>
                    <Row gutter={24}>
                        <Col md={18}>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/note" component={Note}/>
                                <Route path="/archive/:date" component={ArchiveArtList}/>
                                <Route path="/msg" component={Msg}/>
                                <Route path="/friends" component={Friends}/>
                                <Route path="/about" component={About}/>
                                <Route path="/detail/:id" component={ArticleDetail}/>
                                <Route path="/tag/:id" component={ArticleListByTag}/>
                                <Route path="*" component={ErrorPage}/>
                            </Switch>
                        </Col>
                        <Col md={6}>
                            <SideBar/>
                        </Col>
                    </Row>
                </div>
                <BackTop/>
                <Footer/>
            </div>
        );
    }
}

export default App;
