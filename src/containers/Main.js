/**
 * Created By brand On 2018/1/17
 */
import React, {Component} from 'react'
import {Switch,Route,withRouter} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import {Layout, Row, Col, BackTop } from 'antd';
import './main.css'
import NavBar from '../components/nav/Nav'
import Crumb from '../components/breadcrumb/Crumb'
import Bottom from '../components/footer/Footer'
import About from '../containers/AboutMe'
import Article from '../containers/Article'
import Home from '../containers/Home'
import Note from '../containers/Note'
import RightSide from '../components/rightSide/RightSide'
import Detail from "../containers/Detail";
import Tags from "../containers/TagArtList";
import Archive from "../containers/ArchiveArtList";
import QueueAnim from 'rc-queue-anim';

@withRouter
class Main extends Component {
    componentWillReceiveProps(nextProps){

        //当路由切换时回到顶部
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }
    render() {
        return (
            <div>
                <Layout>
                    <QueueAnim
                        style={{overflow:"hidden"}}
                        animConfig={[
                            { opacity: [1, 0], translateY: [0, 1500] },
                            { opacity: [1, 0], translateY: [0, -1500] }
                        ]}>
                    <NavBar key="navbar"/>
                    <div key="content" style={{marginTop: 64, padding: '15px 20px 0'}}>
                        <Crumb />
                        <Row gutter={16}>
                            <Col md={18}>
                                <Switch>
                                    <Route name="Home" path='/' exact component={Home} />
                                    <Route name="Code" path='/code' component={Article} />
                                    <Route name="Note" path='/note' component={Note} />
                                    <Route name="About" path='/aboutme' component={About} />
                                    <Route name="Detail" path='/detail/:id' component={Detail} />
                                    <Route name="Tags" path='/tag/:id' component={Tags} />
                                    <Route name="Archive" path='/archive/:id' component={Archive} />
                                </Switch>
                            </Col>
                            <Col md={6}>
                                <RightSide/>
                            </Col>
                        </Row>
                    </div>
                    <Bottom key="Bottom"/>
                    <BackTop BackTop/>
                    </QueueAnim>
                </Layout>

            </div>

        )
    }
}

export default Main