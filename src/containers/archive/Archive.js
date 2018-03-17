/**
 * Created By brand On 2018/3/10
 */
import React,{Component} from "react"
import {connect} from "react-redux"

import ArchiveTag from "../../components/archive/Archive"
import {getDateList} from "../../redux/Archive"

@connect(
    state=>state,
    {getDateList}
)
class Achive extends Component {
    componentDidMount(){
        this.props.getDateList()
    }
    render(){
        return (
            <div>
                <ArchiveTag artArchive={this.props.artArchive} />
            </div>
        )
    }
}

export default Achive