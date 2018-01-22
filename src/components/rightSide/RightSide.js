/**
 * Created By brand On 2018/1/18
 */
import React,{Component} from 'react'
import Author from '../author/Author'
import HotArticle from "../../containers/HotArticle"
import Tags from "../../containers/Tags"
import Archive from '../../containers/Archive'
import Link from "../link/Link"

class RightSide extends Component {
    render(){
        return (
            <div>
                <Author />
                <HotArticle />
                <Tags />
                <Archive />
                <Link />

            </div>
        )
    }
}

export default RightSide