/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {Link} from "react-router-dom"
import { Row, Col,Icon } from 'antd'
import "./Archive.css"


class Archive extends Component {
    render(){
        const  artArchive = this.props.artArchive || []
        return (
            <div className="side-wrap">
                <h4>文章归档</h4>
                <Row className="archive-css">
                    {
                        artArchive.map(
                            (item,key)=>(
                                <Col key={key} md={12}><Link  to={`/archive/${item.artCdate}`}>{item.Archive} ({item.Num}篇)</Link></Col>
                            )
                        )
                    }
                </Row>
            </div>
        )
    }
}

export default Archive