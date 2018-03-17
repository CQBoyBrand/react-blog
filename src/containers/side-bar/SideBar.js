/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"

import "./sideBar.css"
import Author from "../author/Author"
import Archive from "../archive/Archive"
import Tags from "../tags/Tags"
import Hot from "../hot/Hot"

class SideBar extends Component {
    render(){
        return (
            <div className="sideBar-css">
                <Author />
                <Archive />
                <Hot />
                <Tags />
            </div>
        )
    }
}

export default SideBar